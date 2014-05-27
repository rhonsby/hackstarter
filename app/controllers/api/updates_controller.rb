class Api::UpdatesController < ApplicationController
  def create
    @update = Update.new(update_params)

    if @update.save
      render partial: 'companies/update', locals: { update: @update }
    else
      render json: { errors: @update.errors.messages.keys }, status: 422
    end
  end

  def update
    @update = Update.find(params[:id])

    if @update.update_attributes(update_params)
      render partial: 'companies/update', locals: { update: @update }
    else
      render json: { errors: @update.errors.messages.keys }, status: 422
    end
  end

  private

  def update_params
    params.require(:update).permit(:title, :body, :company_id)
  end
end
