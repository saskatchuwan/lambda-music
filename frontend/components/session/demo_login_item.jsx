import React from 'react';

const DemoLoginItem = ({ demoLogin }) => {
  return (
    <button className='demo-login-button react-link'
      onClick={() => demoLogin({username: 'doppler', password:'demouser'})}>
    DEMO LOGIN
    </button>
   );
};

export default DemoLoginItem;