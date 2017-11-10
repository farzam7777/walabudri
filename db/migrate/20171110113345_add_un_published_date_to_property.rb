class AddUnPublishedDateToProperty < ActiveRecord::Migration[5.0]
  def change
    add_column :properties, :unpublished_date, :datetime
  end
end
