class Api::CoversController < ApplicationController

  def create
    current_user.update!(cover: params[:image]) if params[:image]
    render partial: "api/users/user", locals: {user: current_user}
  end

end
