class MovesController < ApplicationController
  
  def new
  end
  
  def create
    # Create a new move and append it to a game
  end
  
  def get_moves
    respond_to do |format|
      game = Game.find(params[:id])
      @moves = game.moves
      @str = ""
      @moves.each do |move|
        @str += (move.move_number.to_s + ", ")
      end 
      format.js{
        render :get_moves, :layout => false
      }
      
      format.json{
        render :json => @move_array
      }
      
    end
  end
end
