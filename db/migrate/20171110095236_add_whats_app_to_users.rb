class AddWhatsAppToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :whats_app, :string
  end
end
