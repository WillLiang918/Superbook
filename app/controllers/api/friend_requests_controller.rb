class Api::FriendRequestsController < ApplicationController
  def index
    @sent_requests = current_user.sent_friend_requests.select(:receiver_id)
    @received_requests = current_user.received_friend_requests.select(:sender_id)
  end

  def accept
  end

  def create
    @friend_request = FriendRequest.create!(receiver_id: params[:user_id], sender_id: current_user.id)
    render :show
  end

  def deny
    @friend_request = FriendRequest.find(receiver_id: current_user.id, sender_id: params[:user_id])
    @friend_request.destroy!
    render :show
  end

  def cancel
    @friend_request = FriendRequest.find(receiver_id: params[:user_id], sender_id: current_user.id)
    @friend_request.destroy!
    render :show
  end
end
