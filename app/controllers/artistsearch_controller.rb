class ArtistsearchController < ApplicationController
  def index
  end

  def show
    p params
    @artist = params[:id]
    @works = Place.where(artist:@artist)
    @name = @artist.split(",")
  end

end
