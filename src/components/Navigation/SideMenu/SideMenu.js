import React from 'react';
import './SideMenu.css';
import { Link } from "react-router-dom";


const SideMenu = prop => {
    let sideMenuClass = "side-menu";
    if (prop.show) {
        sideMenuClass = "side-menu open";
    }

    return (
        <div>
            <nav className={sideMenuClass}>
                <ul className="sideMenu__ul">
                    <li>
                        <Link to='/' className='nav-item' onClick={prop.remove}>Home</Link>
                    </li>
                    <li>
                        <Link to='/featured' className='nav-item' onClick={prop.remove}>Featured</Link>
                    </li>
                    <li>
                        <Link to='/hero' className='nav-item' onClick={prop.remove}>Earn</Link>
                    </li>
                    <li>
                        <Link to='/signup' className='nav-item' onClick={prop.remove}>Signup</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default SideMenu;