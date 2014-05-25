class Api::UsersController < ApplicationController
  wrap_parameters :user, include: [:username, :password]

  def new
    @user = User.new
  end

  def show
    @user = User.find(params[:id])
    render 'users/show'
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render 'users/show'
    else
      render json: { errors: @user.errors.full_messages }, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
