import React, { useState } from 'react';
import './DropDown.css'
import { Link } from 'react-router-dom';

const MenuItems = [
    {
        title: 'Research',
        link:'/research',
        cName: 'dropdown-link',
    },
    {
        title: 'Artificial Intelligence',
        link:'/ai',
        cName: 'dropdown-link',
    },
    {
        title: 'Machine Learning',
        link:'/ml',
        cName: 'dropdown-link',
    }
]

function DropDown () {
    return(
        <>
            <ul className='dropdown'>
                {MenuItems.map((item,index) => (
                    <li key={index}>
                        <Link to={item.link} className={item.cName}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default DropDown