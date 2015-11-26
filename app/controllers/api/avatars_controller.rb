class Api::AvatarsController < ApplicationController

  def create
    ActiveRecord::Base.transaction do
      current_user.avatar.destroy
      Avatar.create!(image: params[:image], user: current_user)
    end

    @avatar = current_user.avatar
    render :show
  end

end
