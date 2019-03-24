export const fetchArtists = () => (
  $.ajax({
    method: 'GET',
    url: `/api/artists`
  })
);

//will return artist info + all songs + all albums
export const fetchArtist = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/artists/${id}`
  })
);

export const fetchUserSavedArtists = (user_id) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${user_id}/artist_saves`
  })
);
