class Api::UsersController < ApplicationController
  def show
    @user = User.includes(:avatar).find(params[:id])
    @posts = @user.received_posts.includes(:likes, comments: :likes, author: :avatar)
    @friends = @user.friends.includes(:avatar)
  end

  def index
    @friend_ids = current_user.friendships.map(&:friend_id)
    @posts = Post
              .where(author_id: @friend_ids + [current_user.id])
              .includes(:likes, comments: :likes, author: :avatar)
  end
end
