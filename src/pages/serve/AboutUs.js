import React from 'react';
import '../css/AboutUs.css';
import  aboutus from '../images/aboutus.jpg';
function AboutUs () {
    return(
        <>
            <div className='page-container' style={{ backgroundImage: `url(${aboutus})` }}>
                <h1>AboutUs</h1>
            </div>
        </>
    )
}

export default AboutUs;