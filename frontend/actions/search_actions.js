import * as SearchApiUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

export const receiveSearchResults = (payload) => ({
  type: RECEIVE_SEARCH_RESULTS,
  payload
});


export const fetchSearchResults = (search) => (dispatch) => (
  SearchApiUtil.fetchSearchResults(search)
      .then(payload => dispatch(receiveSearchResults(payload)))
);