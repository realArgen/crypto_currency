import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Styles = styled.div`
.side-menu {
    height: 100%;
    background: white;
    box-shadow: 1px 0px 7px rgb(0,0,0,0.5);
    position: fixed;
    top: 0;
    right: 0;
    width: 60%;
    max-width: 400px;
    z-index: 500;
    transform: translateX(100%);
    transition: transform 0.3s ease-out;
}

.side-menu.open {
    transform: translateX(0);
}

.side-menu .sideMenu__ul {
    height: 70%;
    list-style: none;
    display: flex;
    flex-direction: column;
    margin-top: 56px;
    padding: 0;
}

.side-menu .sideMenu__ul li {
    margin: 0;
    border: 0.5px solid #848484d1;
    border-right: none;
    border-left: none;
    border-top: none;
    height: 40px;
    justify-content: center;
    display: flex;
}

.side-menu .sideMenu__ul a {
    color: black;
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.side-menu .sideMenu__ul .nav-item:hover,
.side-menu .sideMenu__ul .nav-item:active {
    color: #e7e407;
    transition: transform 0.3s ease-out;
}


.nav-item{
    margin-left: 10px;
    font-size: 20px;
}

@media (min-width: 768px) {
    .side-menu {
        display: none;
    }
}
`

const SideMenu = prop => {
    let sideMenuClass = "side-menu";
    if (prop.show) {
        sideMenuClass = "side-menu open";
    }

    return (
        <Styles>
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
        </Styles>
    )
};

export default SideMenu;