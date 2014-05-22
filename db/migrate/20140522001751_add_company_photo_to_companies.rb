class AddCompanyPhotoToCompanies < ActiveRecord::Migration
  def change
    add_attachment :companies, :photo
  end
end
