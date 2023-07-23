import React from 'react';
import '../css/Home.css';
import home from '../images/home.jpg'

function Home () {
    return(
        <>
            <div className='page-container' style={{ backgroundImage: `url(${home})` }}>
                <h1>Home</h1>
            </div>
            
        </>
    )
}

export default Home;