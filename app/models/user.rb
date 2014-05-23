# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string(255)      not null
#  password_digest :string(255)      not null
#  session_token   :string(255)      not null
#  created_at      :datetime
#  updated_at      :datetime
#

class User < ActiveRecord::Base
  attr_reader :password

  validates :username, presence: true, uniqueness: { case_sensitive: false }
  validates :session_token, presence: true
  validates :password_digest, presence: { message: "can't be blank" }
  validates :password, length: { minimum: 6, allow_nil: true }

  before_validation :ensure_session_token

  has_many :companies, foreign_key: :owner_id
  has_many :investments, foreign_key: :investor_id
  has_many :company_investments, through: :investments, source: :company

  def self.find_by_credentials(params)
    user = User.find_by_username(params[:username])
    user.try(:is_password?, params[:password]) ? user : nil
  end

  def password=(plain_text)
    unless plain_text.empty?
      @password = plain_text
      self.password_digest = BCrypt::Password.create(plain_text)
    end
  end

  def is_password?(plain_text)
    BCrypt::Password.new(password_digest).is_password?(plain_text)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!

    self.session_token
  end

  private

  def self.generate_session_token
    SecureRandom.hex
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
