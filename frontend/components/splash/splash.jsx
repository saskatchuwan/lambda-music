import React from 'react';
import { Navink, Link } from 'react-router-dom';

class Splash extends React.Component {
 
  render () {
    return (
      <div className='splash-page'>

        <header>
          <div className='navbar-container'>

            <ul className='navbar-logo'>
              <li>lambda</li>
              <li><img src="../../../app/assets/images/icons/noun_Doppler effect_1460336.svg"></img></li>
            </ul>

            <ul className='navbar-user-links'>
                <li><Link to='/signup' className='react-link navbar-user-link'>Sign Up</Link></li>
                <li><Link to='/login' className='react-link navbar-user-link'>Log In</Link></li>
            </ul>
          </div>
        </header>

        <main className='hero'>
          <div className='hero-header-content'>
            <h1>Music for everyone.</h1>
            <h4>Millions of songs. No credit card needed.</h4>
            <br />
            <br />
            
            <a href='/#/signup' className='get-spotify-button'>GET SPOTIFY FREE</a>
          </div>
        </main>
        
        <br />
        
      </div>


    );
  }
}

export default Splash;