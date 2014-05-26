# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  username            :string(255)      not null
#  password_digest     :string(255)      not null
#  session_token       :string(255)      not null
#  created_at          :datetime
#  updated_at          :datetime
#  name                :string(255)
#  biography           :text
#  location            :string(255)
#  website             :string(255)
#  avatar_file_name    :string(255)
#  avatar_content_type :string(255)
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

require 'spec_helper'

describe User do
  pending "add some examples to (or delete) #{__FILE__}"
end
