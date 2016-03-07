class NearbylocationsController < ApplicationController
  def index
    if request.xhr?
      @nearbyspots = Location.near([params['lat'], params['long']], 10, :order => "distance").limit(100)
      render :json => {
        :nearbyspots => @nearbyspots
      }
    end
  end

end
