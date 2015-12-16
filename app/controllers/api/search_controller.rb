class Api::SearchController < ApplicationController

  def user_search
    @users = User.search_by_full_name(params[:name]).includes(:nicknames)
    render :users
  end

  def user_search_preview
    @users = User.search_by_full_name(params[:name]).includes(:nicknames).limit(10)
    render :users
  end

end
