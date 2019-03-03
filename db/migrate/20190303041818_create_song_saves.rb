class CreateSongSaves < ActiveRecord::Migration[5.2]
  def change
    create_table :song_saves do |t|
      t.integer :song_id, null:false
      t.integer :user_id, null:false

      t.timestamps
    end

    add_index :song_saves, :song_id
    add_index :song_saves, :user_id
  end
end
