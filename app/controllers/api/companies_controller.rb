class Api::CompaniesController < ApplicationController
  def index
  end

  def show
    @company = Company.find(params[:id])
    render 'companies/show'
  end

  def create
    company = current_user.companies.build(company_params)

    if company.save
      render json: company
    else
      render json: company.errors.full_messages
    end
  end

  def update
    company = Company.find(params[:id])

    if company.update_attributes(company_params)
      render json: company
    else
      render json: company.errors.full_messages
    end
  end

  def destroy
    company = Company.find(params[:id])
    company.destroy

    render json: company
  end

  private

  def company_params
    params.require(:company).permit(:name, :location, :blurb, :growth_stage,
                                    :duration, :investment_goal, :equity, :photo)
  end
end
