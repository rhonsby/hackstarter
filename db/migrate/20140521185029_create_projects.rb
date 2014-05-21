class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.integer :owner_id, null: false
      t.string :project_location, null: false
      t.integer :funding_goal, null: false
      t.integer :funding_duration, null: false

      t.timestamps
    end

    add_index :projects, :owner_id
  end
end
