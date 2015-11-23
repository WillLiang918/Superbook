class Api::CommentsController < ApplicationController

  before_action :must_have_permission_to_destroy, only: [:destroy]

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

  private

    def comment_params
      params.require(:comment).permit(:commentable_type, :commentable_id, :body, :parent_id)
    end

    def must_have_permission_to_destroy
      return unless params[:commentable_type] == "Post"
      return if current_user.id == params[:author_id].to_i
      post = Post.find(params[:commentable_id])
      if current_user.id != post.sender_id && current_user.id != post.receiver_id
        render text: "You do not have permission to delete comment", status: :unauthorized
      end
    end

end
