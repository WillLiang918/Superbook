class Api::AbilitiesController < ApplicationController
  before_action :ensure_update_permission, only: [:update]

  def update
    current_user.update_abilities!(params[:abilities])
  end

  private

    def ensure_update_permission
      if current_user.id != params[:user_id].to_i
        render text: "You do not have permission to update abilities.", status: :forbidden
      end
    end
end
