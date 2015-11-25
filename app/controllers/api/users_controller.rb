class Api::UsersController < ApplicationController
  def show
    @user = User.includes(:avatar).find(params[:id])
    @posts = @user.received_posts.includes(:likes, comments: :likes, author: :avatar)
    @friends = @user.friends.includes(:avatar)
  end

  def index
    @friends = current_user.friends.includes(:avatar)
    @friend_ids = @friends.map(&:id)
    @posts = Post.where(author_id: @friend_ids + [current_user.id]).includes(:likes, comments: :likes)
  end
end
