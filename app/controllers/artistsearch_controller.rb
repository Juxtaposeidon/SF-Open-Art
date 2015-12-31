class ArtistsearchController < ApplicationController
  def index
    @artists = Place.select(:artist).map(&:artist).uniq.sort_by(&:downcase)
    @artists1 = @artists[0..119]
    @artists2 = @artists[120..239]
    @artists3 = @artists[239..@artists.length-1]
  end

  def show
    p params
    @artist = params[:id]
    @works = Place.where(artist:@artist)
    @name = @artist.split(",")
  end

end
