class Api::SectorsController < ApplicationController
  def index
    @sectors = Sector.all
    render json: @sectors
  end

  def show
    @sector = Sector.find(params[:id])
    render json: @sector
  end
end
