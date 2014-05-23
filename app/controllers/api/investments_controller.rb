class Api::InvestmentsController < ApplicationController
  def create
    @investment = current_user.investments.build(investment_params)

    if @investment.save
      render json: @investment
    else
      render json: { errors: @investment.errors.full_messages }, status: 422
    end
  end

  private

  def investment_params
    params.require(:investment).permit(:amount, :company_id)
  end
end
