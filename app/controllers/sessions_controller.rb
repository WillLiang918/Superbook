class SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(*login_params)
    if @user
      log_in(@user, params[:remember_me])
      render text: "Log in successful!"
    else
      render text: "Log in failed!"
    end
  end

  def destroy
    log_out
    render text: "Log out successful!"
  end

  private

    def login_params
      params.require(:login).permit(:email, :password).values_at(:email, :password)
    end
end
