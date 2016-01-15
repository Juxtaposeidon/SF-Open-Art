class MarkersController < ApplicationController

  def index
    if request.xhr?
      render(json: {locations: Place.all})
    end

  end

end
