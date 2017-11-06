class AddSuperAdminToAdminUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :admin_users, :super_admin, :boolean, default: 0
  end
end
