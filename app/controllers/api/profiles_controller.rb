class Api::ProfilesController < ApplicationController
  before_action :ensure_update_permission, only: [:update]

  def update
    @profile = Profile.find_by(user_id: params[:user_id])
    @profile.update!(profile_params)
    render partial: "api/profiles/profile", locals: {profile: @profile}
  end

  private

    def ensure_update_permission
      if params[:user_id].to_i != current_user.id
        render text: "You do not have permission to update profile.", status: :forbidden
      end
    end

    def profile_params
      params.require(:profile).permit(:work)
    end
end
