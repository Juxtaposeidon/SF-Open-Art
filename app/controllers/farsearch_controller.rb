class FarsearchController < ApplicationController
  def index
  end

  def search
    @result = Place.near(params["query"], 10, :order => "distance").limit(10)
    @getresults = @result.length > 0
  end
end
