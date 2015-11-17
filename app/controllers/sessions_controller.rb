class SessionsController < ApplicationController
  skip_before_action :require_logged_in, only: [:create]

  def create
    @user = User.find_by_credentials(*login_params)
    if @user
      log_in(@user, params[:remember_me])
      redirect_to root_url
    else
      redirect_to login_url
    end
  end

  def destroy
    log_out
    redirect_to login_url
  end

  private

    def login_params
      params.require(:login).permit(:email, :password).values_at(:email, :password)
    end
end
