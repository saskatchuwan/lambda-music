import React from 'react';
import { Navink, Link } from 'react-router-dom';
// import DemoLoginItem from '../session/demo_login_item';

class Splash extends React.Component {
 
  render () {
    return (
      <div className='splash-page'>

        <header>
          <div className='navbar-container'>

            <ul className='navbar-logo'>
              <li><img id='splash-lambda-logo' src={window.images.doppler_logo_w} /></li>
              <li>lambda</li>
            </ul>

            <ul className='navbar-user-links'>
                <li><Link to='/signup' className='react-link navbar-user-link'>Sign Up</Link></li>
                <li><Link to='/login' className='react-link navbar-user-link'>Log In</Link></li>
            </ul>
          </div>
        </header>

        <main className='hero'>
          <div className='hero-header-content'>
            <h1>Music on all wavelengths.</h1>
            <h4>Millions of songs. No credit card needed.</h4>
            <br />
            <br />
            
            <a href='/#/signup' className='get-lambda-button'>GET LAMBDA FREE</a>
          </div>
        </main>
        
        <br />
        
      </div>


    );
  }
}

export default Splash;