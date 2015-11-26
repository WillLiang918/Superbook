class Api::UsersController < ApplicationController
  def show
    @user = User.includes(:avatar).find(params[:id])
    @posts = @user.received_posts.includes(:likes, comments: :likes, author: :avatar)

    @friend_ids = @user.friendships.map(&:friend_id)
    @commenter_ids = Post.commenter_ids(@posts)

    @user_ids = (@commenter_ids + @friend_ids) - @posts.map(&:author_id)
    @users = User.where(id: @user_ids.to_a).includes(:avatar)
  end

  def index
    @friend_ids = current_user.friendships.map(&:friend_id)
    @posts = Post.where(author_id: @friend_ids + [current_user.id])
                 .includes(:likes, comments: :likes, author: :avatar)

    @commenter_ids = Post.commenter_ids(@posts)
    @user_ids = @commenter_ids - @posts.map(&:author_id)
    @users = User.where(id: @user_ids.to_a).includes(:avatar)
  end
end
