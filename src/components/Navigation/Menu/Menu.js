import React from 'react';
import { FaCoins } from 'react-icons/fa';
import styled from 'styled-components';
import MainButton from '../MainButton/MainButton';
import { Link } from 'react-router-dom';

const Styles = styled.div`
.menu {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    background: var(--primary);
    height: 56px;
    z-index: 1000;
}

.menu__ul{
    display: flex;
    width: 80%;
    justify-content: space-around;
}

.nav-item{
    color: #fff;
}


 .nav-item li {
    padding: 0 0.5rem;
}  

.nav-item:hover,
.nav-item a:active {
    color: #fbff00;
} 

.menu__navigation {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 1rem;
}

.menu__title  {
    color: rgb(209, 219, 68);
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 700;
    font-style: italic;
    margin-left: 1rem;
    display: flex;
    align-items: center;
    column-gap: 5px;
}

@media (max-width: 768px) {

    .menu__toggle-button{
        margin-left: auto;
    }
    .menu__ul{
        display: none;
    }
}

@media (min-width: 769px) {
    .menu__toggle-button {
        display: none;
    }
}
`

const Menu = prop => {

    return (
        <Styles>
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
        </Styles>
    )


}

export default Menu;