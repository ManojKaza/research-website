import React from 'react';
import '../css/page.css';
import HeroSection from '../../components/body_components/HeroSection';
function Services () {
    return(
        <>
            <div className='page-container'>
               <HeroSection label='services' height= '400px'/>
            </div>
        </>
    )
}

export default Services;