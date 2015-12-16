class Api::UsersController < ApplicationController
  before_action :ensure_update_permission, only: [:update]

  def show
    @user = User.find(params[:id])
    @posts = @user.received_posts
                  .includes(:author, :likes, comments: :likes)
                  .created_before(params[:created_before])
                  .created_after(params[:created_after])
                  .order(created_at: :desc)
                  .limit(8)

    @friend_ids = @user.friendships.map(&:friend_id)
    @commenter_ids = Post.commenter_ids(@posts)

    @user_ids = (@commenter_ids + @friend_ids) - @posts.map(&:author_id)
    @users = User.where(id: @user_ids.to_a)
  end

  def index
    @friend_ids = current_user.friendships.map(&:friend_id)
    @posts = Post.includes(:author, :likes, comments: :likes)
                 .where(author_id: @friend_ids + [current_user.id])
                 .created_before(params[:created_before])
                 .created_after(params[:created_after])
                 .order(created_at: :desc)
                 .limit(8)

    @commenter_ids = Post.commenter_ids(@posts)
    @receiver_ids = Post.receiver_ids(@posts)
    @user_ids = (@commenter_ids + @receiver_ids) - @posts.map(&:author_id)
    @users = User.where(id: @user_ids.to_a)
  end

  def update
    current_user.update!(user_params)
    render partial: "api/users/user", locals: {user: current_user}
  end

  private

    def user_params
      params.require(:user).permit(:birthday_day, :birthday_month, :birthday_year, :sex, :email)
    end

    def ensure_update_permission
      if current_user.id != params[:id].to_i
        render text: "You do not have permission to update user.", status: :forbidden
      end
    end
end
