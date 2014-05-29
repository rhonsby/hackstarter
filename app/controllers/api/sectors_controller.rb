class Api::SectorsController < ApplicationController
  def index
    @sectors = Sector.all
    render 'sectors/index'
  end

  def show
    @sector = Sector.find(params[:id])
    render 'sectors/sector', locals: { sector: @sector }
  end
end
