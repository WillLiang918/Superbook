class Api::LikesController < ApplicationController

  def like
    debugger
  end

  def unlike
  end

  private

    def like_params
      params.require(:like).permit(:likeable)
    end

end
