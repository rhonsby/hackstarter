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
#

class Company < ActiveRecord::Base
  has_attached_file :photo, styles: { show: '600x440#', card: '298x250#' },
                    default_url: "missing_small.png"

  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\Z/
  validates :owner, :name,
           :location, :duration,
           :investment_goal, :equity, :growth_stage, presence: true

  validates :duration, :investment_goal, :equity,
            numericality: { only_integer: true }
  validates :growth_stage, inclusion: ['Start-Up', 'Early Stage', 'Growth']

  belongs_to :owner, class_name: 'User'
  has_many :investments
  has_many :investors, through: :investments, source: :investor

  def amount_raised
    self.investments.pluck(:amount).inject(&:+)
  end

  def percentage_raised
    sprintf('%0.02f', amount_raised.to_f / investment_goal.to_f * 100)
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
end