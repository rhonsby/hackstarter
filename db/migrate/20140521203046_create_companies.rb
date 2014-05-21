class CreateCompanies < ActiveRecord::Migration
  def change
    create_table :companies do |t|
      t.string :name, null: false
      t.string :location, null: false
      t.text :blurb, null: false
      t.integer :duration, null: false
      t.integer :investment_goal, null: false
      t.integer :equity, null: false
      t.integer :owner_id, null: false
      t.string :growth_stage, null: false

      t.timestamps
    end

    add_index :companies, :name
  end
end
