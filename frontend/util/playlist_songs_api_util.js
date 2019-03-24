export const createPlaylistSong = (playlistSong) => (
  $.ajax({
    method: 'POST',
    url: `/api/playlist_songs`,
    data: { playlistSong }
  })
);

export const deletePlaylistSong = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/playlist_songs/${id}`
  })
);
