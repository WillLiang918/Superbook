class Api::NicknamesController < ApplicationController
  before_action :ensure_update_permission, only: [:update]

  def update
    current_user.update_nicknames!(params[:nicknames])
  end

  private

    def ensure_update_permission
      if current_user.id != params[:user_id].to_i
        render text: "You do not have permission to update aliases.", status: :forbidden
      end
    end
end
