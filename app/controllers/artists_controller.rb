class ArtistsController < ApplicationController
  def index
    @artists = Location.select(:artist).map(&:artist).uniq.sort_by(&:downcase)
    # @artistcount = @artists.length/3
    # @artists1 = @artists[0..(@artistcount-1)]
    # @artists2 = @artists[(@artistcount)..(@artistcount*2-1)]
    # @artists3 = @artists[(@artistcount*2)..(@artistcount*3-1)]
  end

  def show
    @artist = params[:id]
    @works = Location.where(artist:@artist)
    @name = @artist.split(",")
  end

end
