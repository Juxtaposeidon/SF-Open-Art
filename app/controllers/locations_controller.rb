class LocationsController < ApplicationController

  def index
  end

  def search
  end

  def results
    @results = Location.near(params["query"], 10, :order => "distance").limit(10)
  end

end
