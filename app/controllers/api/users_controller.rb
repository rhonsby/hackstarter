class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    render json: @user

    # come back to make sure a user exists
  end
end