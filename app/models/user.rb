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
end
