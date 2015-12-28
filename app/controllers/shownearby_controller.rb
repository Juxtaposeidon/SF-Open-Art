class ShownearbyController < ApplicationController
  def index
  end

  def load
    @nearbyspots = Place.near([params['lat'], params['long']], 10, :order => "distance").limit(100)
    render :json => {
      :partial => render_to_string(:partial => 'shownearby/map')
    }
  end

  def locate
    locationdata = Place.find(params["location"])
    locationlat = locationdata.latitude
    locationlong = locationdata.longitude
    render :json => {
      :lat => locationlat,
      :long => locationlong
    }
  end

end
