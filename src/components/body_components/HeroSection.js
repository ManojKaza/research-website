import React from 'react';
import './HeroSection.css'; // Import your CSS file for styling
import heroItems from './heroItems.js';


const HeroSection = ({label,height}) => {
        const heroItem = heroItems.find(item => item.label === label);
      
        if (!heroItem) {
          // Handle the case when the 'Welcome' item is not found
          return null;
        }
        const backgroundImageStyle = {
            backgroundImage: `url(${heroItem.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: height
          };
  return (
    <div className="hero" style={backgroundImageStyle}>
      <div className="hero-content">
        <h1 className="hero-title">{heroItem.title}</h1>
        <p className="hero-subtitle">{heroItem.subTitle}</p>
        {/* {heroItem.buttonName && <a href={heroItem.buttonTo} className="cta-button">{heroItem.buttonName}</a>} */}
      </div>
    </div>
  );
}
export default HeroSection;
