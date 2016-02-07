class MarkersController < ApplicationController

  def index
    if request.xhr?
      render(json: Location.all)
    end
  end

  def show
    if request.xhr?
      render(json: Location.find(params['markerid']))
    end
  end


end
