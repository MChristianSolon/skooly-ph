import React, { useContext } from 'react';
import SingleLineGridList from './SingleLineGridList';
import { UserContext } from '../../UserContext';

function Gallery() {
  const { globalUser } = useContext(UserContext);

  return (
    <div>
      <h1>Hell from Gallery </h1>
      <h2>{globalUser.displayName}</h2>
      <SingleLineGridList />
      <SingleLineGridList />
      <SingleLineGridList />
    </div>
  );
}

export default Gallery;
