import React from 'react';
import Login from './components/login/Login';
import Gallery from './components/gallery/Gallery';
import Stage from './components/stage/Stage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Login />
      <Gallery />
      <Stage />
    </div>
  );
}

export default App;
