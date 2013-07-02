class UsersController < ApplicationController
  
  skip_before_filter :require_authentication, only:[:new, :create]
  
  def new
    @user = User.new
  end

  def create
    User.create(params[:user])
    redirect_to root_path
  end

  def destroy
  end
  
  def show
    @user = User.find(params[:id])
  end
end
