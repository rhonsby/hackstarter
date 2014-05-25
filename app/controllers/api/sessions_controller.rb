class Api::SessionsController < ApplicationController
  wrap_parameters :user, include: [:username, :password]
  def new
  end

  def create
    @user = User.find_by_credentials(user_params)

    if @user
      login!(@user)
      render 'users/show'
    else
      render json: { errors: ["Invalid username/password"] }, status: 422
    end
  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
