class Update < ActiveRecord::Base
  validates :company, :body, presence: true

  belongs_to :company

  def datestring
    self.created_at.strftime('%b %d %Y')
  end
end
