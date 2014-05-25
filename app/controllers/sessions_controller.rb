class SessionsController < ApplicationController
  before_action :redirect_logged_in_user!, except: [:destroy]

  def new
  end

  def create
    @user = User.find_by_credentials(user_params)

    if @user
      login!(@user)
      redirect_to root_url
    else
      render json: ["Invalid username/password"]
    end
  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil

    redirect_to root_url
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
