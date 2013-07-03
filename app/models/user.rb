class User < ActiveRecord::Base
  has_secure_password
  attr_accessible :uun, :password, :password_confirmation
  has_many :games
  
  validates:uun,
    uniqueness:true,
    presence:true
    
    
    def uun=(value)
      write_attribute :uun, value.downcase
    end
    
    
    def games 
      games = Game.where("user_id_1 = ? OR user_id_2 = ?", self.id, self.id)
    end
    
    def win_games
    end
    
    def loss_games
    end
    
    def draw_games
    end
    
end
