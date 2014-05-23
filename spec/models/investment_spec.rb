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

require 'spec_helper'

describe Investment do
  pending "add some examples to (or delete) #{__FILE__}"
end
