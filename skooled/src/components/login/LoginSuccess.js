import React from 'react';
import loggedIn from '../../images/loggedIn.png';
import clickHere from '../../images/toStart.png';
import { Link } from 'react-router-dom';

function LoginSuccess() {
  return (
    <div style={{ position: 'relative', display: 'inline' }}>
      <img
        src={loggedIn}
        alt="Login Sucess!"
        style={{ height: '100%', width: '100%' }}
      ></img>
      <Link to="/gallery">
        <img
          src={clickHere}
          alt="Login Sucess!"
          style={{ position: 'absolute', bottom: '20vh', left: '15vh' }}
        ></img>
      </Link>
    </div>
  );
}

export default LoginSuccess;
