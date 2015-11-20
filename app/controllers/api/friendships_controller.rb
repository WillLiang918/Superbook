class Api::FriendshipsController < ApplicationController

  def index
    @user_id = params[:user_id].to_i
    @friendships = Friendship.where(user_id: @user_id)
  end

end
