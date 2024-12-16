"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { CSSTransition } from 'react-transition-group';

const AboutSection = () => {
  const [tab, setTab] = useState("Education");

  const handleTabChange = (id: string) => {
    setTab(id);
  };

  const renderTabContent = () => {
    if (tab === 'Education') {
      return (
        <p className="about-section__text">
          I have studied web development and graphic design with a focus frontend 
          technologies like React, Tailwind CSS, and Next.js.
        </p>
      );
    } else if (tab === 'Experience') {
      return (
        <p className="about-section__text">
          I have experience working on real-world projects including eCommerce websites,
           personal portfolios, and graphic design for various clients.
        </p>
      );
    }
  };

  return (
    <section className="about-section">
      <div className="about-section__container">
        <div className="about-section__image-container">
          <div className="about-section__image-wrapper">
            <Image
              src="/png.image.jpg"
              alt="my pic"
              width={300}
              height={300}
              className="about-section__image"
            />
          </div>
        </div>

        <div id="about" className="about-section__content">
          <h2 className="about-section__title">
            About Me
          </h2>

          <p className="about-section__text">
            I am a passionate Frontend Developer and Graphic Designer with a strong foundation in HTML, CSS,
            JavaScript, and Next.js. My journey in web development has been fueled by a love for creating clean,
            functional, and visually appealing user interfaces. Lets create something amazing together!
          </p>

          <div className="about-section__tabs">
            <button
              className={`about-section__tab ${tab === 'Education' ? 'about-section__tab--active' : ''}`}
              onClick={() => handleTabChange('Education')}
            >
              Education
            </button>
            <button
              className={`about-section__tab ${tab === 'Experience' ? 'about-section__tab--active' : ''}`}
              onClick={() => handleTabChange('Experience')}
            >
              Experience
            </button>
          </div>

          <CSSTransition
            key={tab}
            in={true}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="about-section__content-fade">
              {renderTabContent()}
            </div>
          </CSSTransition>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

