class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :name
      t.integer :user_id_1
      t.integer :user_id_2
      t.timestamps
    end
  end
end
