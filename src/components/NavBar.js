import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    const [click,setClick] = useState(false);
    const handleClick = () => {setClick(!click)};
    const closeMobileMenu = () =>{setClick(false)};
    const handleResize = () => {
        if(window.innerWidth >=768){
            setClick(false)
        }
    };
    window.onresize = handleResize;

    return(
        <>
        <nav className='nav'>
            <Link to='/'>Manoj</Link>
            <div>
                <ul className={click ? 'topnav active': 'topnav'}>
                    <li onClick={closeMobileMenu}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li onClick={closeMobileMenu}>
                        <Link to='/aboutus'>About us</Link>
                    </li>
                    <li onClick={closeMobileMenu}>
                        <Link to='/services'>Service</Link>
                    </li>
                    <li onClick={closeMobileMenu}>
                        <Link to='/contact'>Contact us</Link>
                    </li>
                </ul>
            </div>
            <div className='mobile'>
                <i className={click ? 'fa fa-times' : 'fa fa-bars'} onClick={handleClick}></i>
            </div>
        </nav>
        </>
    )
}
export default NavBar