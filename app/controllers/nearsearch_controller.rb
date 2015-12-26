class NearsearchController < ApplicationController

  def index
    @test = Place.near(37,-120, 20, :order => "distance")
    p @test
  end

end
