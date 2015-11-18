class User < ActiveRecord::Base
  SEXES = ["male", "female"]

  validates :first_name, :last_name, :email, :birthday, :sex, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :email, format: { with: /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i }
  validates :sex, inclusion: SEXES
  validate :birthday_must_be_in_the_past

  after_initialize :ensure_session_token, :parse_birthday
  before_save :downcase_email

  has_many :authored_posts, class_name: "Post", foreign_key: :author_id, dependent: :destroy
  has_many :received_posts, class_name: "Post", foreign_key: :receiver_id, dependent: :destroy
  has_many :sent_friend_requests, class_name: "FriendRequest", foreign_key: :sender_id, dependent: :destroy
  has_many :received_friend_requests, class_name: "FriendRequest", foreign_key: :receiver_id, dependent: :destroy

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

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.is_password?(password)
  end

  def to_builder
    Jbuilder.new do |user|
      user.(self, :id, :first_name, :last_name, :birthday, :sex, :email)
    end
  end
end
