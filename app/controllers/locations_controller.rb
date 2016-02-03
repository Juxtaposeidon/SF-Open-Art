class LocationsController < ApplicationController
  def index
    if request.xhr?
      @resultindex = 1
      @showprev = false
      @shownext = true
      @@allspots = Location.near([params['lat'], params['long']], 10, :order => "distance").limit(100)
      @nearbyspots = Location.near([params['lat'], params['long']], 10, :order => "distance").limit(100)[@resultindex-1..@resultindex+8]
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
      :partial => render_to_string(:partial => 'locations/show', :locals => {resultindex: @resultindex, showprev: @showprev, shownext: @shownext, nearbyspots: @nearbyspots})
    }
  end

  def search
  end

  def results
    @results = Location.near(params["query"] + " san francisco", 10, :order => "distance").limit(10)
    @getresults = @results.length > 0
  end

end
