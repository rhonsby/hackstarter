# == Schema Information
#
# Table name: companies
#
#  id               :integer          not null, primary key
#  name             :string(255)      not null
#  location         :string(255)      not null
#  funding_duration :integer          not null
#  funding_goal     :integer          not null
#  equity           :integer          not null
#  owner_id         :integer          not null
#  created_at       :datetime
#  updated_at       :datetime
#

class Company < ActiveRecord::Base
  validate :owner, :name,
           :location, :funding_duration,
           :funding_goal, :equity, presence: true

  belongs_to :owner, class_name: 'User'
end
