import React, { useState, useEffect } from 'react';
import '../css/home.css';
import HeroSection from '../../components/body_components/HeroSection';
import Card from '../../components/body_components/Card';

function Home() {
  const [scrollOpacity, setScrollOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const scrollThreshold = 60;

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
    <div className='home-page-container'>
      <HeroSection label='home' height='600px'/>
        <div className='body-content-container'>
          <div className="home-content-container" style={{ opacity: scrollOpacity }}>
            <div className='home-content-container-width'>
              <div className='home-content-container-text'>
              <h1>About Us</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  malesuada lacus ac justo gravida, in pulvinar risus rhoncus.
                  Nullam bibendum quam vel mi rhoncus, nec suscipit dolor
                  volutpat...
                </p>
                <a href="/aboutus" className="learn-more-button">
                  Learn More
                </a>
              </div>
              <div className="home-content-container-images">
              <img src={'/images/aboutus.jpg'} alt="About Us" />
              </div>
            </div>
          </div>

        {/* Services */}
        <div className='home-content-container' style={{ opacity: scrollOpacity }}>
          <div className='home-content-container-width'>
            <div className='home-content-container-text'>
              <h1>Services</h1>
              <p> Digital Catapult offers a range of services to help your organisation benefit from advanced digital technologies.</p>
            </div>
            <div className='home-card-container'>
              <Card imageUrl="/images/research.jpg" url='/research'>
                <h2>Research</h2>
                <p>Research is defined as the creation of new knowledge and/or the use of existing knowledge in a new and creative way so as to generate new concepts, methodologies and understandings.</p>
              </Card>
              <Card imageUrl="/images/ai.jpg" url='/ai'>
                <h2>Artificial Intelligence</h2>
                <p>Artificial intelligence refers to the simulation or approximation of human intelligence in machines.</p>
              </Card>
              <Card imageUrl="/images/ml.jpg" url='/ml'>
                <h2>Machine Learing</h2>
                <p>Machine Learing defined as the capability of a machine to imitate intelligent human behavior</p>
              </Card>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}

export default Home;

