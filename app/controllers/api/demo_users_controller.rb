class Api::DemoUsersController < ApplicationController

  def add
    DemoUsers.add(params[:name])
    render nothing: true
  end

  def remove
    DemoUsers.remove(params[:name])
    render nothing: true
  end

end
