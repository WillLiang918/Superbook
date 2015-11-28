class Api::DemoUsersController < ApplicationController

  def add
    DemoUsers.add(params[:name])
  end

  def remove
    DemoUsers.remove(params[:name])
  end

end
