class Api::CommentsContrller < ApplicationContrller

  def create
    @comment = Comment.create!(**comment_params, author_id: current_user.id)
    render :show
  end

  private

    def comment_params
      params.require(:comment).permit(:commentable_type, :commentable_id, :body, :parent_id)
    end

end
