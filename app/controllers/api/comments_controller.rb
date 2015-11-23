class Api::CommentsController < ApplicationController

  before_action :must_have_permission_to_destroy, only: [:destroy]
  before_action :must_be_author, only: [:update]

  def create
    @comment = Comment.new(comment_params)
    @comment.author = current_user
    @comment.save!
    render :show
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy!
    render :show
  end

  def udpate
    @comment.update!(update_params)
    render :show
  end

  private

    def comment_params
      params.require(:comment).permit(:commentable_type, :commentable_id, :body, :parent_id)
    end

    def udpate_params
      params.requere(:comment).permit(:body)
    end

    def must_have_permission_to_destroy
      return if params[:commentable_type] != "Post" || current_user.id == params[:author_id].to_i

      post = Post.find(params[:commentable_id])
      if current_user.id != post.sender_id && current_user.id != post.receiver_id
        render text: "You do not have permission to delete comment", status: :unauthorized
      end
    end

    def must_be_author
      @comment = Comment.find(params[:id])
      unless current_user.id == @comment.author_id
        render text: "You must be the author to update this comment", status: :unauthorized
      end
    end

end
