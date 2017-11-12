class AddUnitToProperty < ActiveRecord::Migration[5.0]
  def change
    add_column :properties, :unit, :string
  end
end
