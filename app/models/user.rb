require_relative "../../lib/token_generator.rb"

class User < ActiveRecord::Base
  SEXES = ["male", "female"]

  validates :first_name, :last_name, :email, :birthday, :sex, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :sex, inclusion: SEXES
  validate :birthday_must_be_in_the_past

  after_initialize :ensure_session_token

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
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def generate_session_token
    TokenGenerator.generate_token { |token| User.find_by(session_token: token).nil? }
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
  end

  def ensure_session_token
    self.session_token = generate_session_token unless self.session_token
  end
end
