import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  let currentUserId = state.session.currentUserId;
  let currentUser = state.entities.users[currentUserId];

  return ({
    currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    openModal: modal => dispatch(openModal(modal)),
  });
};


class LibraryTopNav extends React.Component {

  render () {
    return (
      <div className='library-top-nav-container'>
        <ul className='library-top-nav-links'>
          <li>
            <NavLink className='nav-link' to='/library/playlists'>
              PLAYLISTS
            </NavLink>
          </li>
          <li>
            <NavLink className='nav-link' to='/library/songs'>
              SONGS
            </NavLink>
          </li>
          <li>
            <NavLink className='nav-link' to='/library/artists'>
              ARTISTS
            </NavLink>
          </li>
          <li>
            <NavLink className='nav-link' to='/library/albums'>
              ALBUMS
            </NavLink>
          </li>
          {/* <li>
            <NavLink className='nav-link' to='library/albums'>
              ANOTHER
            </NavLink>
          </li> */}
        </ul>
        
        {/* onclick, opens modal */}
        <div className='create-playlist-button-container'>
          <button className='create-playlist-button'
                  onClick={() => this.props.openModal('create-playlist')}>
          NEW PLAYLIST
          </button>
        </div>
    </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LibraryTopNav);
