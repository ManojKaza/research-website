import React from 'react';
import '../css/ContactUs.css';
import  contactus from '../images/contactus.jpg';
function ContactUs () {
    return(
        <>
            <div className='page-container' style={{ backgroundImage: `url(${contactus})` }}>
                <h1>ContactUs</h1>
            </div>
        </>
    )
}

export default ContactUs;