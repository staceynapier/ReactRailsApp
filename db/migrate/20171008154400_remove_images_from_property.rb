class RemoveImagesFromProperty < ActiveRecord::Migration
  def change
    remove_column :properties, :images
  end
end
