class AddCurrencyToProperty < ActiveRecord::Migration[5.0]
  def change
    add_column :properties, :currency, :string
  end
end
