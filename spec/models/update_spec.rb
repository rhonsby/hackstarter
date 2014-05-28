# == Schema Information
#
# Table name: updates
#
#  id         :integer          not null, primary key
#  title      :string(255)      not null
#  company_id :integer          not null
#  body       :text             not null
#  created_at :datetime
#  updated_at :datetime
#

require 'spec_helper'

describe Update do
  pending "add some examples to (or delete) #{__FILE__}"
end
