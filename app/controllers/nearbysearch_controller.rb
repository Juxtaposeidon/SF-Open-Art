class NearbysearchController < ApplicationController
  def index
    if request.xhr?
      @resultindex = 1
      @showprev = false
      @shownext = true
      @@allspots = Place.near([params['lat'], params['long']], 10, :order => "distance").limit(100)
      @nearbyspots = Place.near([params['lat'], params['long']], 10, :order => "distance").limit(100)[@resultindex-1..@resultindex+8]
      render :json => {
        :partial => render_to_string(:partial => 'nearbysearch/map')
      }
    end
  end

  def show
    @resultindex = params[:id].to_i
    @showprev = @resultindex > 1
    @shownext = @resultindex < 90
    @nearbyspots = @@allspots[@resultindex - 1..@resultindex + 8]
    render :json => {
      :partial => render_to_string(:partial => 'nearbysearch/locations')
    }
  end

  # def prevresults
  #   @@resultspage -= 10
  #   @resultindex = @@resultspage + 1
  #   @showprev = @@resultspage > 0
  #   @shownext = @@resultspage < 90
  #   @nearbyspots = @@allspots[@@resultspage..@@resultspage+9]
  #   render :json => {
  #     :partial => render_to_string(:partial => 'nearbysearch/locations')
  #   }
  # end


end
