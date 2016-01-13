class LocationsController < ApplicationController
  def index
    if request.xhr?
      @resultindex = 1
      @showprev = false
      @shownext = true
      @@allspots = Place.near([params['lat'], params['long']], 10, :order => "distance").limit(100)
      @nearbyspots = Place.near([params['lat'], params['long']], 10, :order => "distance").limit(100)[@resultindex-1..@resultindex+8]
      render :json => {
        :partial => render_to_string(:partial => 'locations/map')
      }
    end
  end

  def show
    @resultindex = params[:id].to_i
    @showprev = @resultindex > 1
    @shownext = @resultindex < 90
    @nearbyspots = @@allspots[@resultindex - 1..@resultindex + 8]
    render :json => {
      :partial => render_to_string(:partial => 'locations/show')
    }
  end

  def search

  end

  def results
    @result = Place.near(params["query"], 10, :order => "distance").limit(10)
    @getresults = @result.length > 0
  end

end
