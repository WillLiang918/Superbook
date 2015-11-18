class Api::FriendRequestsController < ApplicationController
  def index
    @sent_requests = current_user.sent_friend_requests.select(:receiver_id)
    @received_requests = current_user.received_friend_requests.select(:sender_id)
  end
end
