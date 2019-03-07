import React from 'react';
import { Switch } from 'react-router-dom';

//dynamic main components;
import SearchBarContainer from './search_bar_container';
import SearchPlacecard from './search_placecard_item';
import SearchResultsContainer from './search_results_container';


import {
  ProtectedRoute
} from '../../util/route_util';

const Search = () => (
  <div className='main-view-body-central-container'>

    <ProtectedRoute path="/search" component={SearchBarContainer} />

    <Switch>
      <ProtectedRoute path="/search/recent" component={SearchPlacecard} />
      <ProtectedRoute path="/search/results/:searchTerm" component={SearchResultsContainer} />
    </Switch>

  </div>
);

export default Search;
