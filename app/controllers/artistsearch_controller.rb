class ArtistsearchController < ApplicationController
  def index
  end

  def show
    p params
    @artist = params[:id]
    @works = Place.where(artist:@artist)
  end

end
