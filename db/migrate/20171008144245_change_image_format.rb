class ChangeImageFormat < ActiveRecord::Migration
  def change
    change_column :properties, :images, :string, array: true, default: '{}'
  end
end
