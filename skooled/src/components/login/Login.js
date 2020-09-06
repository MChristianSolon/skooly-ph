import React, { useContext } from 'react';
import { auth } from '../../Firebase';
import { uiConfig } from '../../Firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Skooly from '../../images/skooly.png';
import { UserContext } from '../../UserContext';
import LoginSuccess from './LoginSuccess';
import Kid1 from '../../images/kid1.png';
import Kid2 from '../../images/kid2.png';
import Kid3 from '../../images/kid3.png';

function Login() {
  const { globalUser, setGlobalUser } = useContext(UserContext);
  //test
  console.log(globalUser);
  //
  auth.onAuthStateChanged((user) => {
    if (user) {
      setGlobalUser(user);
      console.log('You Are Logged in!', user.displayName);
    } else {
      console.log('error no one logged in');
      setGlobalUser(user);
    }
  });

  return (
    <div style={{ textAlign: 'center' }}>
      {globalUser ? (
        <LoginSuccess />
      ) : (
        <>
          <img
            src={Skooly}
            alt="whoops"
            style={{ marginTop: '15vh', height: '50vh' }}
          ></img>
          <img
            src={Kid1}
            alt="whoops"
            style={{ position: 'absolute', height: '35vh', bottom: '10px' }}
          ></img>
          <img
            src={Kid2}
            alt="whoops"
            style={{ position: 'absolute', height: '35vh', left: '45px' }}
          ></img>
          <img
            src={Kid3}
            alt="whoops"
            style={{ position: 'absolute', height: '35vh', right: '35px' }}
          ></img>
          <StyledFirebaseAuth
            class="login-authentication"
            uiConfig={uiConfig}
            firebaseAuth={auth}
          ></StyledFirebaseAuth>
        </>
      )}
    </div>
  );
}

export default Login;
