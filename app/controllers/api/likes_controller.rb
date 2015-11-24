class Api::LikesController < ApplicationController
  before_action :ensure_valid_params

  def like
    @like = Like.create!(
      user: current_user,
      likeable_id: params[:likeable_id],
      likeable_type: params[:likeable_type]
    )
    render :show
  end

  def unlike
    @like = Like.find_by(
      user_id: current_user.id,
      likeable_id: params[:likeable_id],
      likeable_type: params[:likeable_type]
    )
    @like.destroy!
    render :show
  end

  private

    def ensure_valid_params
      unless params[:likeable_id] && params[:likeable_type]
        render text: "Invalid request", status: :unprocessable_entity
      end
    end

end
