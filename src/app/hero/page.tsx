"use client";

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  const handleOpenCV = () => {
    const link = document.createElement('a');
    link.href = ''; 
    link.target = '_blank'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); 
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        
        
        <div className="hero-image-container">
          <div className="hero-image">
            <Image
              src="/her.2.jpg"
              alt="my pic"
              width={300}
              height={300}
              className="hero-image-inner"
            />
          </div>
        </div>

      
        <div className="hero-text-container">
          <h1 className="hero-heading">
            <span className="hero-heading-highlight">
              Hello, I am
            </span>
            <br></br>
            <span className="hero-animation">
              <TypeAnimation
                sequence={[
                  'Shoaib Arain',
                  1000,
                  'Web Developer',
                  1000,
                  'Graphic Designer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="hero-description">
            I am a passionate frontend developer and graphic designer, with expertise in HTML, CSS, 
            and JavaScript.
          </p>
          <div className="hero-buttons">
            <button className="hero-button hire-button">
              Hire Me
            </button>
            <button onClick={handleOpenCV} className="hero-button cv-button">
              <span className="cv-button-inner"> Download CV</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;




