import React, { useContext } from 'react';
import { auth } from '../../Firebase';
import { uiConfig } from '../../Firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Sigma from '../../images/Sigma.png';
import { UserContext } from '../../UserContext';

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
        <h1>Welcome</h1>
      ) : (
        <>
          <img src={Sigma} alt="whoops"></img>
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
