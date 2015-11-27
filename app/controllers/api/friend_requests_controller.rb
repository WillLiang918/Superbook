class Api::FriendRequestsController < ApplicationController
  def index
    @sent_requests = current_user.sent_friend_requests
    @requesters = current_user.requesters.includes(:avatar)
  end

  def accept
    sender_id, receiver_id = params[:user_id].to_i, current_user.id
    @friend_request = FriendRequest.find_by(sender_id: sender_id, receiver_id: receiver_id)
    @friend_request.accept!
    render :show
  end

  def create
    @friend_request = FriendRequest.create!(receiver_id: params[:user_id], sender_id: current_user.id)
    render :show
  end

  def deny
    @friend_request = FriendRequest.find_by(receiver_id: current_user.id, sender_id: params[:user_id])
    @friend_request.deny!
    render :show
  end

  def cancel
    @friend_request = FriendRequest.find_by(receiver_id: params[:user_id], sender_id: current_user.id)
    @friend_request.cancel!
    render :show
  end
end
