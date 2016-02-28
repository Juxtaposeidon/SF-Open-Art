class LocationsController < ApplicationController
  def index
    if request.xhr?
      @resultindex = 1
      @showprev = false
      @shownext = true
      @nearbyspots = Location.near([params['lat'], params['long']], 10, :order => "distance").limit(100)
      # p @@allspots
      # @nearbyspots = Location.near([params['lat'], params['long']], 10, :order => "distance").limit(100)[@resultindex-1..@resultindex+8]
      render :json => {
        :nearbyspots => @nearbyspots, :prev =>@showprev, :next => @shownext
      }
    end
  end

  def show
    p params
    @resultindex = params[:indexno].to_i
    @showprev = @resultindex > 1
    @shownext = @resultindex < 90
    @nearbyspots = @@allspots[@resultindex - 1..@resultindex + 8]
    p @@allspots
    render :json => {resultindex: @resultindex, showprev: @showprev, shownext: @shownext, nearbyspots: @nearbyspots}
  end

  def search
  end

  def results
    @results = Location.near(params["query"] + " san francisco", 10, :order => "distance").limit(10)
    @hasresults = @results.length > 0
  end

end
