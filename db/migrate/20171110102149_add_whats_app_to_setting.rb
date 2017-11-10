class AddWhatsAppToSetting < ActiveRecord::Migration[5.0]
  def change
    add_column :settings, :whats_app, :string
  end
end
