class Api::CoversController < ApplicationController

  def create
    @cover = current_user.cover
    @cover.update!(image: params[:image]) if params[:image]
    render :show
  end

end
