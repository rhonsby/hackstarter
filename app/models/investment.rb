# == Schema Information
#
# Table name: investments
#
#  id          :integer          not null, primary key
#  investor_id :integer          not null
#  company_id  :integer          not null
#  amount      :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#

class Investment < ActiveRecord::Base
  validates :investor, :company, :amount, presence: true
  validates :amount, numericality: { only_integer: true,
                                     greater_than_or_equal_to: 0 }

  belongs_to :company
  belongs_to :investor, class_name: 'User'
end
