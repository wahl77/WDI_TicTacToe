class GamesController < ApplicationController
  def new
  end

  def create
    Game.create(params[:game])
    
  end

  def edit
  end

  def udpate
  end
end
