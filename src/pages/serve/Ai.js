import React from 'react';
import '../css/Ai.css';
import  ai from '../images/ai.jpg';
function Ai () {
    return(
        <>
            <div className='page-container' style={{ backgroundImage: `url(${ai})` }}>
                <h1>Artificial Intelligence</h1>
            </div>
        </>
    )
}

export default Ai;