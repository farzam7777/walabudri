class AddPropertyStatusToProperty < ActiveRecord::Migration[5.0]
  def change
    add_column :properties, :status, :string
  end
end
