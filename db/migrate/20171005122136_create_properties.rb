class CreateProperties < ActiveRecord::Migration
  def change
    create_table :properties do |t|
      t.string :location
      t.integer :bedrooms
      t.integer :publicRooms
      t.integer :bathrooms
      t.string :price
      t.string :description
      t.string :furnished
      t.datetime :availableFrom
      t.string :images

      t.timestamps null: false
    end
  end
end
