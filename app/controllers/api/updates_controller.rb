class Api::UpdatesController < ApplicationController
  def update
    @update = Update.find(params[:id])

    if @update.update_attributes(update_params)
      render partial: 'companies/update', locals: { update: @update }
    else
      render json: { errors: @udpate.errors.full_messages }, status: 422
    end
  end

  private

  def update_params
    params.require(:update).permit(:title, :body)
  end
end
