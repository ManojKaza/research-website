import React from 'react';
import '../css/Research.css';
import  research from '../images/research.jpg';
function Research () {
    return(
        <>
            <div className='page-container' style={{ backgroundImage: `url(${research})` }}>
                <h1>Research</h1>
            </div>
        </>
    )
}

export default Research;