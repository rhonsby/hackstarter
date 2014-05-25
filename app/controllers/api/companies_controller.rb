class Api::CompaniesController < ApplicationController
  wrap_parameters :company, include: [:photo, :name, :location,
                                      :blurb, :duration, :investment_goal,
                                      :equity, :growth_stage,
                                      :pitch, :market, :website, :sector_id]

  def index
    @companies = Company.all
    render 'companies/index'
  end

  def show
    @company = Company.find(params[:id])
    render 'companies/show'
  end

  def create
    @company = current_user.companies.build(company_params)

    if @company.save
      render 'companies/show'
    else
      render json: { errors: @company.errors.full_messages }, status: 422
    end
  end

  def update
    @company = Company.find(params[:id])

    if @company.update_attributes(company_params)
      render 'companies/show'
    else
      render json: { errors: @company.errors.full_messages }, status: 422
    end
  end

  def destroy
    @company = Company.find(params[:id])
    @company.destroy

    render json: {}
  end

  private

  def company_params
    params.require(:company).permit(:name, :location, :blurb, :growth_stage,
                                    :duration, :investment_goal, :equity,
                                    :photo, :pitch, :market, :website, :sector_id)
  end
end
