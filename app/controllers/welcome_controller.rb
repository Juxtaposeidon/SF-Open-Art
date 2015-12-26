class WelcomeController < ApplicationController

  def index
    @place = Place.all
    @place.each do |item|
      p item.longitude
      p item.latitude
    end
  end

end
