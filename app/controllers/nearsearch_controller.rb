class NearsearchController < ApplicationController

  def index
    @test = Place.near([37.808, -122.41], 20, :order => "distance")
    p @test
  end

  def locate
    @nearspot = Place.near([params['lat'], params['long']], 20, :order => "distance").limit(1)
    p @nearspot
    p @nearspot[0].latitude
    render :json => {
      :partial => render_to_string(:partial => 'nearsearch/map')
    }
  end

  def

end
