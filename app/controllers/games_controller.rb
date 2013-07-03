class GamesController < ApplicationController
  def new
  end

  def create
    
    game = Game.new
    game.player1 = current_user
    game.player2 = User.find(params[:game][:player2])
    game.name = params[:game][:name]
    
    game.save
    redirect_to root_path
    
  end

  def edit
  end

  def udpate
  end
  
  def show
    @game = Game.find(params[:id])
  end
end
