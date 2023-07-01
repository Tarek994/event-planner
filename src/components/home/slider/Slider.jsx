import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { images } from './images';
import "./slider.css"


const Slider = () => {
  return (
    <Carousel className="slider">
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={image.alt} />
          <p className="legend">{image.caption}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
