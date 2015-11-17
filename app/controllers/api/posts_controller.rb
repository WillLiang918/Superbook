class Api::PostsController < ApplicationController
  before_action :must_be_author, only: [:update, :destroy]

  def create
    @post = Post.create!(post_params)
    render :show
  end

  def update
    @post.update!(update_params)
    render :show
  end

  def show
    @post = Post.find(params[:id])
  end

  def index
    @posts = Post.all
  end

  def destroy
    @post.destroy!
    render :show
  end

  private

    def must_be_author
      @post = Post.find(params[:id])
      redirect_to root_url unless @post.author_id == current_user.id
    end

    def post_params
      params.require(:post).permit(:body, :receiver_id)
    end

    def update_params
      params.require(:post).permit(:body)
    end
end
