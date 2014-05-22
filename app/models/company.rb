# == Schema Information
#
# Table name: companies
#
#  id              :integer          not null, primary key
#  name            :string(255)      not null
#  location        :string(255)      not null
#  blurb           :text             not null
#  duration        :integer          not null
#  investment_goal :integer          not null
#  equity          :integer          not null
#  owner_id        :integer          not null
#  growth_stage    :string(255)      not null
#  created_at      :datetime
#  updated_at      :datetime
#

class Company < ActiveRecord::Base
  has_attached_file :photo, styles: { medium: '300x300>', thumb: '100x100>', card: '298x250#' },
                    # default_url: "/images/:style/missing.png"
                    default_url: "missing_small.png"

  validates :owner, :name,
           :location, :duration,
           :investment_goal, :equity, :growth_stage, presence: true
  validates :growth_stage, inclusion: ['Start-Up', 'Early Stage', 'Growth']
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\Z/

  belongs_to :owner, class_name: 'User'
end
