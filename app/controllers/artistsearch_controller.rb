class ArtistsearchController < ApplicationController
  def index
    @artists = Place.select(:artist).map(&:artist).uniq
  end

  def show
    p params
    @artist = params[:id]
    @works = Place.where(artist:@artist)
    @name = @artist.split(",")
  end

end
