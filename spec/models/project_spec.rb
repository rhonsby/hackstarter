# == Schema Information
#
# Table name: projects
#
#  id               :integer          not null, primary key
#  title            :string(255)      not null
#  owner_id         :integer          not null
#  project_location :string(255)      not null
#  funding_goal     :integer          not null
#  funding_duration :integer          not null
#  created_at       :datetime
#  updated_at       :datetime
#

require 'spec_helper'

describe Project do
  pending "add some examples to (or delete) #{__FILE__}"
end
