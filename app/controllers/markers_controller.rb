class MarkersController < ApplicationController

  def index
    if request.xhr?
      render(json: Location.all)
    else
      redirect_to root_path
    end
  end

  def show
    if request.xhr?
      render(json: Location.find(params['markerid']))
    else
      redirect_to root_path
    end
  end


end
