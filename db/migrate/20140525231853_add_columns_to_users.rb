class AddColumnsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :name, :string
    add_column :users, :biography, :text
    add_column :users, :location, :string
    add_column :users, :website, :string
    add_attachment :users, :avatar
  end
end
