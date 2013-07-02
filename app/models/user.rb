class User < ActiveRecord::Base
  attr_accessible :uun
  has_many :games
  
  validates:uun,
    uniqueness:true,
    presence:true
    
    
    def uun=(value)
      write_attribute :uun, value.downcase
    end
end
