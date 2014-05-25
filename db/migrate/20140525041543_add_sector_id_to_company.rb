class AddSectorIdToCompany < ActiveRecord::Migration
  def change
    add_column :companies, :sector_id, :integer, null: false
  end
end
