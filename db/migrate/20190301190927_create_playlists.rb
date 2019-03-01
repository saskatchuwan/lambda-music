class CreatePlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists do |t|
      t.string :name, null:false
      t.integer :owner_id, null:false

      t.timestamps
    end

    add_index :playlists, :name
    add_index :playlists, :owner_id
  end
end
