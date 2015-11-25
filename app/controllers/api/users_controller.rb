class Api::UsersController < ApplicationController
  def show
    @user = User.includes(:avatar).find(params[:id])
    @posts = @user.received_posts.includes(:likes, comments: :likes, author: :avatar)

    @author_ids = @posts.map(&:author_id)
    @friend_ids = @user.friendships.map(&:friend_id)
    @commenter_ids = @posts.reduce(Set.new) do |commenter_ids, post|
      post.comments.each { |comment| commenter_ids << comment.author_id }
      commenter_ids
    end

    @user_ids = (@commenter_ids + @friend_ids) - @author_ids
    @users = User.where(id: @user_ids).includes(:avatar)
  end

  def index
    @friend_ids = current_user.friendships.map(&:friend_id)
    @posts = Post
              .where(author_id: @friend_ids + [current_user.id])
              .includes(:likes, comments: :likes, author: :avatar)
  end
end
