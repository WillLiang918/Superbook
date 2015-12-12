class Api::UsersController < ApplicationController
  def show
    @user = User.includes(:avatar, :cover, profile: [:nicknames, :abilities]).find(params[:id])
    @posts = @user.received_posts
                  .includes(:likes, comments: :likes, author: :avatar)
                  .created_before(params[:created_before])
                  .created_after(params[:created_after])
                  .order(created_at: :desc)
                  .limit(8)

    @friend_ids = @user.friendships.map(&:friend_id)
    @commenter_ids = Post.commenter_ids(@posts)

    @user_ids = (@commenter_ids + @friend_ids) - @posts.map(&:author_id)
    @users = User.where(id: @user_ids.to_a).includes(:avatar)
  end

  def index
    @friend_ids = current_user.friendships.map(&:friend_id)
    @posts = Post.includes(:likes, comments: :likes, author: :avatar)
                 .where(author_id: @friend_ids + [current_user.id])
                 .created_before(params[:created_before])
                 .created_after(params[:created_after])
                 .order(created_at: :desc)
                 .limit(8)

    @commenter_ids = Post.commenter_ids(@posts)
    @receiver_ids = Post.receiver_ids(@posts)
    @user_ids = (@commenter_ids + @receiver_ids) - @posts.map(&:author_id)
    @users = User.where(id: @user_ids.to_a).includes(:avatar)
  end
end
