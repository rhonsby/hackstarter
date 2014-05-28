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

class Update < ActiveRecord::Base
  validates :company, :body, :title, presence: true

  belongs_to :company
  has_many :comments, as: :commentable

  def datestring
    self.created_at.strftime('%b %d %Y')
  end
end
