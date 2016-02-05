class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :artist
      t.float :latitude
      t.float :longitude
      t.string :title
      t.string :address
    end
  end
end
