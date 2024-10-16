import React, { useState, useRef, useEffect } from 'react';
import '../styles/Hero.css';
import GenerateImage from '../pages/GenerateImage';
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
} from '../assets/images';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const slideshowInterval = useRef(null);

  const handleModal = () => setOpenModal(!openModal);
  const close = () => setOpenModal(!openModal);

  // Automatic slideshow function
  useEffect(() => {
    slideshowInterval.current = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 8000); // Change image every 3 seconds

    return () => clearInterval(slideshowInterval.current); // Cleanup on unmount
  }, []);

  return (
    <section className="hero">
      <div className="hero-con">
        <div className="hero-flex">
          {/* Slideshow Image */}
          <div className="hero-image">
            <img src={images[currentImage]} alt="AI-powered visuals" />
          </div>

          <div className="hero-content">
            <h1>Make Every Activity More Worthy!</h1>
            <p>
              Introducing Imagene, the ultimate AI image generator. Simply enter your keywords or
              ideas, and watch as Imagene transforms them into breathtaking visuals. Say hello to
              customized images that capture the essence of your imagination. Get ready to be amazed
              by the power of Imagene.
            </p>
            <div className="hero-btns">
              <button className="try-btn hero-btn" onClick={handleModal}>
                Try Imagene Something!
              </button>
              <a
                href="https://www.linkedin.com/in/kierian-tirian-00838224b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="dev-btn hero-btn">Developer</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Section */}
      <div className={`modal ${openModal ? 'modal' : 'modal close'}`}>
        <GenerateImage close={close} />
      </div>
    </section>
  );
};

export default Hero;
