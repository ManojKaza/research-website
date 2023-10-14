import React, { useState, useEffect } from 'react';
import '../css/aboutus.css';
import HeroSection from '../../components/body_components/HeroSection';
import Card from '../../components/body_components/Card';

function AboutUs() {
  const [scrollOpacity, setScrollOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const scrollThreshold = 10;

      if (scrolled > scrollThreshold) {
        setScrollOpacity(1);
      } else {
        setScrollOpacity(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='aboutus-page-container'>
      <HeroSection label='aboutus' height='400px' />
      <div className='body-page-container'>
        <div className="aboutus-content-container" style={{ opacity: scrollOpacity }}>
          <div className='aboutus-content-container-width'>
            <div className='aboutus-content-container-text'>
              <h1>About Us</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                malesuada lacus ac justo gravida, in pulvinar risus rhoncus.
                Nullam bibendum quam vel mi rhoncus, nec suscipit dolor
                volutpat...
              </p>
            </div>
            <div className="aboutus-content-container-images">
              <img src={'/images/aboutus.jpg'} alt="About Us" />
            </div>
          </div>
        </div>
        <div className='aboutus-content-container' style={{ opacity: scrollOpacity }}>
          <div className='aboutus-content-container-width'>
            <div className='aboutus-content-container-text'>
              <h1>Services</h1>
              <p>Here you can search more about us iqugfuqh3ugiy ywgfyqifyvyvl</p>

            </div>
            <div className='aboutus-card-container'>
              <Card imageUrl="/images/services.jpg" url='/services'>
                <h2>Services</h2>
              </Card>
              <Card imageUrl="/images/contactus.jpg" url='/contactus'>
                <h2>Contact Us</h2>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;