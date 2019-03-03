class CreateArtistSaves < ActiveRecord::Migration[5.2]
  def change
    create_table :artist_saves do |t|
      t.integer :artist_id, null:false
      t.integer :user_id, null:false

      t.timestamps
    end

    add_index :artist_saves, :artist_id
    add_index :artist_saves, :user_id
  end
end
