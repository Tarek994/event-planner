 import { photos } from "./Images"


import React from 'react';

const Gallery = () => {

  return (
    <div className="gallery">
      {photos.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
}

export default Gallery;
