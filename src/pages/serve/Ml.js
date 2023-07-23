import React from 'react';
import '../css/Ml.css';
import  ml from '../images/ml.jpg';
function Ml () {
    return(
        <>
            <div className='page-container' style={{ backgroundImage: `url(${ml})` }}>
                <h1>Machine Learning</h1>
            </div>
        </>
    )
}

export default Ml;