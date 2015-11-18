class UsersController < ApplicationController
  skip_before_action :require_logged_in, only: [:new, :create]

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.confirm_email && @user.save
      log_in(@user)
      redirect_to root_url
    else
      render :new
    end
  end

  private

    def user_params
      params.require(:user)
            .permit(:first_name, :last_name, :email, :sex, :password,
             :email_confirmation, :birthday_year, :birthday_month, :birthday_day)
    end
end
