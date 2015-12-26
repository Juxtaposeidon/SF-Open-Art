class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|
      t.string :artist
      t.string :latitude
      t.string :longitude
      t.string :title
      t.string :location
    end
  end
end
