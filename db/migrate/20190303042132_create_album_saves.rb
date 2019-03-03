class CreateAlbumSaves < ActiveRecord::Migration[5.2]
  def change
    create_table :album_saves do |t|
      t.integer :album_id, null:false
      t.integer :user_id, null:false

      t.timestamps
    end

    add_index :album_saves, :album_id
    add_index :album_saves, :user_id
  end
end
