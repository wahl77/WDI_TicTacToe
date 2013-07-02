class Game < ActiveRecord::Base
  attr_accessible :name
  has_many :moves, dependent: :destroy
  belongs_to :player1, :class_name => 'User', :foreign_key => 'user_id_1'
  belongs_to :player2, :class_name => 'User', :foreign_key => 'user_id_2'
  
  
  def validate_move
    # Get current moves in this game and validate the next one
  end
  
  def check_for_win
    # From all the moves, check if the game has a winner
  end
  
  
  
end
