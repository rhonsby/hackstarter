class CreateUpdates < ActiveRecord::Migration
  def change
    create_table :updates do |t|
      t.string :title, null: false
      t.integer :company_id, null: false
      t.text :body, null: false

      t.timestamps
    end
  end
end
