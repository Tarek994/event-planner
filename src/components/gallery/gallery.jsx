import React from "react";
import { Photos } from "./Photos";
import "./gallery.css";

const Gallery = () => {
  return (
    <div className="gallery" id="gallery">
      <div className="main-gallery">
        <h3 className="title">Some Of Our Work</h3>
        <div className="images">
          {Photos.map((photo, index) => (
            <div className="gallery-item" key={index}>
              <img
                className="gallery-image"
                src={photo.src}
                alt={`Photo ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
