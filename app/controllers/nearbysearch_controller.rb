class NearbysearchController < ApplicationController
  def index
  end

  def load
    @resultindex = 1
    @@resultspage = 0
    @showprev = false
    @shownext = true
    @@allspots = Place.near([params['lat'], params['long']], 10, :order => "distance").limit(100)
    @nearbyspots = Place.near([params['lat'], params['long']], 10, :order => "distance").limit(100)[@@resultspage..@@resultspage+9]
    render :json => {
      :partial => render_to_string(:partial => 'nearbysearch/map')
    }
  end

  def nextresults
    @@resultspage += 10
    @resultindex = @@resultspage + 1
    @showprev = @@resultspage > 0
    @shownext = @@resultspage < 90
    @nearbyspots = @@allspots[@@resultspage..@@resultspage+9]
    render :json => {
      :partial => render_to_string(:partial => 'nearbysearch/locations')
    }
  end

  def prevresults
    @@resultspage -= 10
    @resulttrack = @@resultspage
    @showprev = @@resultspage > 0
    @shownext = @@resultspage < 90
    @nearbyspots = @@allspots[@@resultspage..@@resultspage+9]
    render :json => {
      :partial => render_to_string(:partial => 'nearbysearch/locations')
    }
  end


end
