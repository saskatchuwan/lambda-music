import React from 'react';
import { Route, Switch } from 'react-router-dom';

//dynamic main components;
import SearchPlacecardContainer from './search_placecard_container';
import SearchResultsContainer from './search_results_container';


import {
  ProtectedRoute
} from '../../util/route_util';

const Search = () => (
  <Switch>
    <ProtectedRoute path="/search/results" component={SearchResultsContainer} />
    <ProtectedRoute path="/search" component={SearchPlacecardContainer} />
  </Switch>
);

export default Search;
