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