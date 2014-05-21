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

require 'spec_helper'

describe Company do
  pending "add some examples to (or delete) #{__FILE__}"
end
