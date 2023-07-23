import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DropDown from './DropDown';
import './NavBar.css';

function NavBar() {
    const [click,setClick] = useState(false);

    const handleClick = () => {setClick(!click)};

    //icon handle 
    const closeMobileMenu = () =>{setClick(false)};

    const handleResize = () => {
        if(window.innerWidth >=768){
            setClick(false)
        }
    };
    window.onresize = handleResize;

    //Drop down handle
    const [dropDown,setDropDown] = useState(false);
    const [hoverTimeout,setHoverTimeout] = useState(null);

    const handleDropDown = () => {
        if (window.innerWidth >= 768) {
            setDropDown(!dropDown)
        }
    };

    const handleMouseHover = () => {
        clearTimeout(hoverTimeout)
        window.innerWidth< 768 ? setDropDown(false) : setDropDown(true);
    };

    const handleMouseExit = () => {
        const timeout = setTimeout(() =>{
            setDropDown(false)
        }, 250)
        setHoverTimeout(timeout)
    }

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
                    <li onMouseEnter={handleMouseHover} onMouseLeave={handleMouseExit} onClick={() => {
                        closeMobileMenu();
                        handleDropDown();}}>
                        <Link to='/services'>
                            Services <i className='fa fa-caret-down'></i>
                        </Link>
                        {dropDown && <DropDown />}
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