import React from 'react';
import '../css/Services.css';
import  services from '../images/services.jpg';
function Services () {
    return(
        <>
            <div className='page-container' style={{ backgroundImage: `url(${services})` }}>
                <h1>Services</h1>
            </div>
        </>
    )
}

export default Services;