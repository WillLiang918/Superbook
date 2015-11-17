class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :require_logged_in

  helper_method :current_user, :logged_in?

  def log_in(user, remember_me = nil)
    if remember_me
      cookies.permanent[:session_token] = user.reset_session_token!
    else
      cookies[:session_token] = user.reset_session_token!
    end
  end

  def log_out
    cookies.delete(:session_token)
  end

  def current_user
    @current_user ||= User.find_by(session_token: cookies[:session_token]) if cookies[:session_token]
  end

  def logged_in?
    !!current_user
  end

  def require_logged_in
    redirect_to login_url unless logged_in?
  end
end
