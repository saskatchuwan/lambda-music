import React from 'react';
import { connect } from 'react-redux';

import { fetchSearchResults } from '../../actions/search_actions';

const mapStateToProps = (state) => {
  return ({
    songs: state.search.songs,
    artists: state.search.artists,
    albums: state.search.albums,
    playlists: state.search.playlists,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchSearchResults: (searchTerm) => dispatch(fetchSearchResults(searchTerm)),
  });
};


class SearchBarContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  componentDidUpdate (prevProps) {
    if ((prevProps.songs !== this.props.songs ||
        prevProps.albums !== this.props.albums || 
        prevProps.artists !== this.props.artists || 
        prevProps.playlists !== this.props.playlists)
    ){

      this.props.history.push(`/search/results/${this.state.searchTerm}`);
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    },
      () => this.props.fetchSearchResults({search_term: this.state.searchTerm})
    );
  }

  render () {
    return (
      <div className='search-bar-container'>
        <input type='text' 
                className='search-bar'
                onChange={this.update('searchTerm')} 
                placeholder= 'Start typing...' 
                value={this.state.searchTerm}/>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBarContainer);
