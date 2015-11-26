class Api::AvatarsController < ApplicationController

  def create
    @avatar = current_user.avatar
    @avatar.update!(image: params[:image]) if params[:image]
    render :show
  end

end
