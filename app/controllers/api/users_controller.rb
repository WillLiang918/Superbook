class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @posts = @user.received_posts.includes(:author)
  end
end
