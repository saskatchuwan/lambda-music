class CreatePlaylistSaves < ActiveRecord::Migration[5.2]
  def change
    create_table :playlist_saves do |t|
      t.integer :playlist_id, null:false
      t.integer :user_id, null:false

      t.timestamps
    end

    add_index :playlist_saves, :playlist_id
    add_index :playlist_saves, :user_id
  end
end
