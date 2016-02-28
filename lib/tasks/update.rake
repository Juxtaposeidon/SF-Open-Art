require 'open-uri'
require 'json'

desc "I update the location db"
task :update => :environment do
source = JSON.load(open("https://data.sfgov.org/resource/zfw6-95su.json"))
source.each do |item|
  pending = Location.find_by artist: item["artist"], title: item["title"]
  if pending == nil
    start = item["geometry"].index("[").to_i + 1
    finish = item["geometry"].index("]").to_i - 1
    coords = item["geometry"][start..finish].split(",")
    lat = coords[1]
    long = coords[0]
    Location.create(artist: item["artist"], latitude: lat.to_f, longitude: long.to_f, title: item["title"])
  end
  sleep(0.3)
end
dupes = Location.select("MIN(id) as id").group(:title, :artist).collect(&:id)
Location.where.not(id: dupes).destroy_all
Location.where(latitude: 37.7749295, longitude: -122.4194155).destroy_all
Location.find_by(artist: "Beauchemin, Micheline", latitude: 37.615223, longitude: -122.389979).delete
Location.find_by(artist: "artist").delete

end