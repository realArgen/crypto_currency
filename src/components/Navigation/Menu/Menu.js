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

                    <Link to='/'>
                        <div className="menu__title">
                            Crypto<FaCoins className='icon' />
                        </div>
                    </Link>
                    <ul className="menu__ul">

                        <li>
                            <Link to='/' className='nav-item'>Home</Link>
                        </li>
                        <li>
                            <Link to='/featured' className='nav-item'>Featured</Link>
                        </li>
                        <li>
                            <Link to='/hero' className='nav-item'>Earn</Link>

                        </li>
                        <li>
                            <Link to='/signup' className='nav-item'>Signup</Link>
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