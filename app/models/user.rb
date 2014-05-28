# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  username            :string(255)      not null
#  password_digest     :string(255)      not null
#  session_token       :string(255)      not null
#  created_at          :datetime
#  updated_at          :datetime
#  name                :string(255)
#  biography           :text
#  location            :string(255)
#  website             :string(255)
#  avatar_file_name    :string(255)
#  avatar_content_type :string(255)
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

class User < ActiveRecord::Base
  attr_reader :password

  has_attached_file :avatar, styles: { large: '240x240#', medium: '200x200#', small: '80x80#' },
                             default_url: "/images/profile/:style/missing.jpg",
                             convert_options: { all: '-quality 75' }

  validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/
  validates_attachment_file_name :avatar, :matches => [/png\Z/, /jpe?g\Z/]

  validates :username, length: { minimum: 3 }
  validates :username, presence: true, uniqueness: { case_sensitive: false }
  validates :session_token, presence: true
  validates :password_digest, presence: { message: "can't be blank" }
  validates :password, length: { minimum: 6, allow_nil: true }

  before_validation :ensure_session_token

  has_many :companies, foreign_key: :owner_id
  has_many :investments, foreign_key: :investor_id
  has_many :backed_companies, through: :investments, source: :company
  has_many :comments

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
