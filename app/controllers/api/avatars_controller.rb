class Api::AvatarsController < ApplicationController

  def create
    current_user.update!(avatar: params[:image]) if params[:image]
    render partial: "api/users/user", locals: {user: current_user}
  end

end
