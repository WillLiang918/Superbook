class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    @user.birthday = parse_birthday
    if confirm_email && @user.save
      log_in(@user)
      render text: "Sign Up Success!"
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

    def confirm_email
      params[:user][:email] == params[:user][:email_confirmation]
    end

    def parse_birthday
      fields = [:birthday_year, :birthday_month, :birthday_day].map { |field| params[:user][field].to_i }
      fields.all? { |field| field > 0 }  && Date.new(*fields)
    end
end
