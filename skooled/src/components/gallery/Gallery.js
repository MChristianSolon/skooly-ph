import React from 'react';
import ImgMediaCard from './ImgMediaCard';
import LectureGal from '../../images/LectureGallery.png';
import './Gallery.css';
function Gallery() {
  return (
    <div className="GeneralGallery">
      <img
        src={LectureGal}
        alt="LecGal"
        style={{
          width: '80vh',
          position: 'relative',
          left: '50vh',
          marginBottom: '20px',
        }}
      />
      <br></br>
      <br></br>

      <ImgMediaCard />

      <ImgMediaCard />

      <ImgMediaCard />

      <ImgMediaCard />

      <ImgMediaCard />

      <ImgMediaCard />

      <ImgMediaCard />

      <ImgMediaCard />

      <ImgMediaCard />

      <ImgMediaCard />

      <ImgMediaCard />

      <ImgMediaCard />
    </div>
  );
}

export default Gallery;
