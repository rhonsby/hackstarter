class AddPitchAndMarketToCompany < ActiveRecord::Migration
  def change
    add_column :companies, :pitch, :text
    add_column :companies, :market, :text
  end
end
