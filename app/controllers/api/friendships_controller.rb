class Api::FriendshipsController < ApplicationController

  def index
    @user_id = params[:user_id].to_i
    @friendships = Friendship.where(user_id: @user_id)
  end

  def destroy
    @user_id, @friend_id = params[:user_id].to_i, current_user.id
    ActiveRecord::Base.transaction do
      Friendship.where(user_id: @user_id,   friend_id: @friend_id).each(&:destroy!)
      Friendship.where(user_id: @friend_id, friend_id: @user_id  ).each(&:destroy!)
    end
  end

end
