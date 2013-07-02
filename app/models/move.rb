class Move < ActiveRecord::Base
  belongs_to :game
  belongs_to :user
  attr_accessible :move_number
end
