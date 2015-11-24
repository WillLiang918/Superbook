class Api::UsersController < ApplicationController
  def show
    @user = User.includes(:avatar).find(params[:id])
    @posts = @user.received_posts.includes(:likes, comments: :likes, author: :avatar)
    @friends = @user.friends.includes(:avatar)
  end
end
