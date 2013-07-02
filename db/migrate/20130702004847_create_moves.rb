class CreateMoves < ActiveRecord::Migration
  def change
    create_table :moves do |t|
      t.integer :move_number
      t.references :game
      t.references :user
      t.timestamps
    end
    add_index :moves, :user_id
    add_index :moves, :game_id
  end
end
