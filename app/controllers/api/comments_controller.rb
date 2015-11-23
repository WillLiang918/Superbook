class Api::CommentsController < ApplicationController

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

end
