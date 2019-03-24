export const fetchAlbums = () => (
  $.ajax({
    method: 'GET',
    url: `/api/albums`
  })
);

// will return album info + all songs
export const fetchAlbum = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/albums/${id}`
  })
);

export const fetchUserSavedAlbums = (user_id) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${user_id}/album_saves`
  })
);