class SessionsController < ApplicationController
  before_action :redirect_if_logged_in!, except: [:destroy]

  def new
  end

  def create
    @user = User.find_by_credentials(user_params)

    if @user 
      login!(@user)
      render json: @user
    else
      render json: ["Invalid username/password"]
    end
  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil

    render json: ["You have successfully logged out"]
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
