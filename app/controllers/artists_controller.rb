class ArtistsController < ApplicationController
  def index
    @artists = Location.select(:artist).map(&:artist).uniq.sort_by(&:downcase)
  end

  def show
    @artist = params[:id]
    @works = Location.where(artist:@artist)
    @name = @artist.split(",").reverse.join(" ")
  end

end
