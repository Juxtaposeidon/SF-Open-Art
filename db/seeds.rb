# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require 'open-uri'
require 'json'

source = JSON.load(open("https://data.sfgov.org/resource/zfw6-95su.json"))

source.each do |item|
  # p item["geometry"].index("[")
  start = item["geometry"].index("[").to_i + 1
  finish = item["geometry"].index("]").to_i - 1
  coords = item["geometry"][start..finish].split(",")
  lat = coords[1]
  long = coords[0]
  Location.create(artist: item["artist"], latitude: lat.to_f, longitude: long.to_f, title: item["title"])
  sleep(0.3)
end
Location.find(1).delete
dupes = Location.select("MIN(id) as id").group(:title, :artist).collect(&:id)
Location.where.not(id: dupes).destroy_all
Location.where(latitude: 37.7749295, longitude: -122.4194155).destroy_all
edit1 = Location.where(artist:"Beauchemin, Micheline")
edit1[0].title = "Untitled"
edit1[0].save