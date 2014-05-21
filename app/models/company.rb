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
  validates :owner, :name,
           :location, :duration,
           :investment_goal, :equity, :growth_stage, presence: true
  validates :growth_stage, inclusion: ['Start-Up', 'Early Stage', 'Growth']

  belongs_to :owner, class_name: 'User'
end
