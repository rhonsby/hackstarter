# == Schema Information
#
# Table name: sectors
#
#  id         :integer          not null, primary key
#  name       :string(255)      not null
#  created_at :datetime
#  updated_at :datetime
#

class Sector < ActiveRecord::Base
  validates :name, presence: true

  has_many :companies
end
