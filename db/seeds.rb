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
  start = item["geometry"].index("[")
  finish = item["geometry"].index("]")
  coords = item["geometry"][start+1..finish-1].split(",")
  lat = coords[1]
  long = coords[0]
  Place.create(artist: item["artist"], latitude: lat, longitude: long, title: item["title"], location: item["location_description"])
end