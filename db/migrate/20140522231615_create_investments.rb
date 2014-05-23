class CreateInvestments < ActiveRecord::Migration
  def change
    create_table :investments do |t|
      t.integer :investor_id, null: false
      t.integer :company_id, null: false
      t.integer :amount, null: false

      t.timestamps
    end

    add_index :investments, [:investor_id, :company_id]
  end
end
