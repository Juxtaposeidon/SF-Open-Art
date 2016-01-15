class MarkersController < ApplicationController

  def index
    if request.xhr?
      render(json:  Place.all)
    end

  end

end
