import React, { useState } from "react";
import { images } from "./images";

const Carrusel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <div className="images">
        <img src={images[currentImage].src} alt={images[currentImage].alt} />
      </div>
      <div className="controls">
        <button onClick={handlePrevious}>Anterior</button>
        <button onClick={handleNext}>Siguiente</button>
      </div>
    </div>
  );
};

export default Carrusel;
