export const fetchSongs = () => (
  $.ajax({
    method: 'GET',
    url: `/api/songs`
  })
);

export const fetchSong = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/songs/${id}`
  })
);

export const fetchUserSavedSongs = (user_id) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${user_id}/song_saves`
  })
)