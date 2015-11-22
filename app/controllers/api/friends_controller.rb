class Api::FriendsController < ApplicationController

  def index
    @friends = current_user.friends.includes(:avatar)
  end

end
