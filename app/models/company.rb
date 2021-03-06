# == Schema Information
#
# Table name: companies
#
#  id                 :integer          not null, primary key
#  name               :string(255)      not null
#  location           :string(255)      not null
#  blurb              :text             not null
#  duration           :integer          not null
#  investment_goal    :integer          not null
#  equity             :integer          not null
#  owner_id           :integer          not null
#  growth_stage       :string(255)      not null
#  created_at         :datetime
#  updated_at         :datetime
#  photo_file_name    :string(255)
#  photo_content_type :string(255)
#  photo_file_size    :integer
#  photo_updated_at   :datetime
#  pitch              :text
#  market             :text
#  website            :string(255)
#  sector_id          :integer          not null
#

class Company < ActiveRecord::Base
  has_attached_file :photo, styles: { large: '600x440#',
                    small: '298x250#', medium: '320x240#' },
                    default_url: "/images/companies/:style/missing.png"

  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\Z/
  validates_attachment_file_name :photo, :matches => [/png\Z/, /jpe?g\Z/]

  validates :owner, :name, :sector,
           :location, :duration,
           :investment_goal, :equity, :growth_stage, presence: true
  validates :blurb, length: { maximum: 140 }
  validates :duration, :investment_goal, :equity,
            numericality: { only_integer: true, greater_than_or_equal_to: 0 }
  validates :growth_stage, inclusion: ['Start-Up', 'Early Stage', 'Growth']

  belongs_to :owner, class_name: 'User'
  belongs_to :sector
  has_many :investments
  has_many :investors, through: :investments, source: :investor
  has_many :updates, dependent: :destroy
  has_many :comments, as: :commentable
  has_many :commentors, through: :comments, source: :user

  def amount_raised
    self.investments.pluck(:amount).inject(&:+)
  end

  def percentage_raised
    (amount_raised.to_f / investment_goal.to_f * 100).round
  end

  def days_left
    days_since = (Date.today - created_at.to_date).to_i
    duration - days_since
  end

  def end_date
    date = Date.today + days_left
    date.strftime("%a, %B %d %Y")
  end

  def unique_investors
    self.investors.uniq
  end

  def sector_name
    self.sector.name
  end
end
