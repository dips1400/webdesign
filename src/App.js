import "./App.scss";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Image1 from "../src/images/emile-perron-xrVDYZRGdw4-unsplash.png";
import Image2 from "../src/images/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.png";
import Image3 from "../src/images/james-harrison-vpOeXr5wmR4-unsplash.png";
import Infocontainer from "./components/Infocontainer";
import Container from "./components/Container";
import Lowerfooter from "./components/Lowerfooter";


const images = [Image1, Image2, Image3];

function App() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(
        currentImage === images.length - 1 ? 0 : currentImage + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [currentImage]);

  const goToPrev = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const goToNext = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };
  return (
    <div className="app">
      <Navbar />
      <div className="hero-section">
        <div
          className="carousel"
          style={{ backgroundImage: `url(${images[currentImage]})` }}
        >
          <button className="arrow prev" onClick={goToPrev}>
            &#10094;
          </button>
          <button className="arrow next" onClick={goToNext}>
            &#10095;
          </button>
          <Infocontainer />
        </div>
      </div>
      <Container />
      <Lowerfooter />
    </div>
  );
}

export default App;
