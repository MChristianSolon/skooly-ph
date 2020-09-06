import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrimarySearchAppBar from './components/Navbar/MenuAppBar';
import Login from './components/login/Login';
import Gallery from './components/gallery/Gallery';
import Stage from './components/stage/Stage';
import { UserContext } from './UserContext';
import './App.css';

function App() {
  const [globalUser, setGlobalUser] = useState(null);

  return (
    <Router>
      <div>
        <PrimarySearchAppBar />
        <Switch>
          <UserContext.Provider value={{ globalUser, setGlobalUser }}>
            <Route component={Login} exact path="/" />
            <Route component={Gallery} path="/gallery" />
            <Route component={Stage} path="/stage" />
          </UserContext.Provider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
