module SessionsHelper
  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
  end

  def require_login!
    redirect_to new_session_url unless logged_in?
  end

  def redirect_logged_in_user!
    redirect_to root_url if logged_in?
  end
end
