class User < ActiveRecord::Base
  SEXES = ["male", "female"]

  include PgSearch
  pg_search_scope :search_by_full_name,
    against: [:first_name, :last_name],
    associated_against: {
      nicknames: :name,
      abilities: :name
    },
    using: {tsearch: {prefix: true}}

  validates :first_name, :last_name, :email, :birthday, :sex, :password_digest, :session_token, presence: true
  validates :session_token, uniqueness: true
  validates :email, uniqueness: { case_sensitive: false }
  validates :email, format: { with: /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i }
  validates :sex, inclusion: SEXES
  validate :birthday_must_be_in_the_past

  after_initialize :ensure_session_token
  before_save :downcase_email, :parse_birthday
  after_save  :create_profile, :create_avatar, :create_cover

  has_attached_file :avatar,
    styles: { profile: "160x160#", thumb: "21x21#" },
    default_url: "default_avatar.jpeg"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  has_attached_file :cover,
    styles: { cover: "847x314>" },
    default_url: "default_cover.jpg"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  has_many :authored_posts, class_name: "Post", foreign_key: :author_id, dependent: :destroy
  has_many :received_posts, class_name: "Post", foreign_key: :receiver_id, dependent: :destroy
  has_many :sent_friend_requests, class_name: "FriendRequest", foreign_key: :sender_id, dependent: :destroy
  has_many :received_friend_requests, class_name: "FriendRequest", foreign_key: :receiver_id, dependent: :destroy
  has_many :requesters, through: :received_friend_requests, source: :sender
  has_many :friendships, dependent: :destroy
  has_many :reverse_friendships, class_name: "Friendship", foreign_key: :friend_id, dependent: :destroy
  has_many :friends, through: :friendships, source: :friend
  has_many :authored_comments, class_name: "Comment", foreign_key: :author_id, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_one  :profile, dependent: :destroy
  has_many :nicknames, dependent: :destroy, inverse_of: :user
  has_many :abilities, dependent: :destroy, inverse_of: :user
  has_many :sent_messages, class_name: "Message", foreign_key: :sender_id, dependent: :destroy


  attr_accessor :email_confirmation, :birthday_day, :birthday_month, :birthday_year
  attr_reader :password

  def birthday_must_be_in_the_past
    if birthday.present? && birthday > Date.today
      errors.add(:birthday, "must be in the past")
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password).to_s
  end

  def is_password?(password)
    password && BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.generate_session_token
    TokenGenerator.generate_token { |token| User.find_by(session_token: token).nil? }
  end

  def self.find_by_name(name)
    name_parts = name.split
    first_name = name_parts.first
    last_name = name_parts.drop(1).join(" ")
    self.find_by(first_name: first_name, last_name: last_name)
  end

  def name
    "#{self.first_name} #{self.last_name}"
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token = User.generate_session_token unless self.session_token
  end

  def downcase_email
    self.email = self.email.downcase
  end

  def confirm_email
    email == email_confirmation
  end

  def parse_birthday
    day, month, year = birthday_day.to_i, birthday_month.to_i, birthday_year.to_i
    if day.between?(1, 31) && month.between?(1, 12) && year.between?(1905, Time.now.year)
      self.birthday = Date.new(year, month, day)
    end
  end

  def create_profile
    Profile.create!(user: self) if self.profile.nil?
  end

  def create_avatar
    Avatar.create!(user: self) if self.avatar.nil?
  end

  def create_cover
    Cover.create!(user: self) if self.cover.nil?
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email.downcase)
    return user if user && user.is_password?(password)
  end

  def as_json
    context = ApplicationController.new.view_context
    context.render('/api/users/user.json.jbuilder', handlers: [:jbuilder], user: self)
  end

  def friend!(other_user)
    ActiveRecord::Base.transaction do
      Friendship.create!(user_id: self.id, friend_id: other_user.id)
      FriendRequest.where(sender_id: self.id, receiver_id: other_user.id).each(&:destroy!)
      FriendRequest.where(sender_id: other_user.id, receiver_id: self.id).each(&:destroy!)
    end
  end

  def update_names!(klass, names)
    new_name_set = Set.new(names)
    old_name_set = Set.new(klass.where(user_id: self.id).map(&:name))
    names_to_delete = (old_name_set - new_name_set).to_a
    names_to_create = (new_name_set - old_name_set).to_a
    ActiveRecord::Base.transaction do
      klass.where(user_id: self.id, name: names_to_delete).destroy_all
      names_to_create.each do |name|
        klass.create!(user_id: self.id, name: name)
      end
    end
  end

  def update_nicknames!(names)
    update_names!(Nickname, names)
  end

  def update_abilities!(names)
    update_names!(Ability, names)
  end
end
