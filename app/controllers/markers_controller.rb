class MarkersController < ApplicationController

  def index
    if request.xhr?
      render(json:  Place.all)
    end
  end

  def show
    if request.xhr?
      p params
      render(json: Place.find(params['markerid']))
    end
  end


end
