import React from 'react';
import { FaCoins } from 'react-icons/fa';
import './Menu.css';
import MainButton from '../MainButton/MainButton';
import { Link } from 'react-router-dom';

const Menu = prop => {

    return (
        <div>
            <header className="menu">
                <nav className="menu__navigation">

                    <div className="menu__title">
                        <a href="/">Crypto<FaCoins className='icon' /></a>
                    </div>
                    <ul className="menu__ul">


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
                    <div className="menu__toggle-button">
                        <MainButton click={prop.clickHandler} />
                    </div>
                </nav>

            </header>
        </div>
    )


}

export default Menu;