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
