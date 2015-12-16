class Api::CoversController < ApplicationController

  def create
    current_user.update!(cover: params[:image]) if params[:image]
    render :show
  end

end
