import React from 'react';
import Crypto from '../assets/hero-img.png';
import styled from 'styled-components';
import Modal from './Modal/Modal';

const Styles = styled.div`
.hero{
    margin-top:50px;
}
.hero .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 4rem auto;
    justify-content: center;
    align-items: center;
    padding: 1rem;
}

.hero .left {
    padding: 1rem;
}

.hero h1 {
    padding: 1rem 0;
}

.hero .input-container {
    padding: 1rem 0;
}

.hero .right {
    padding: 1rem;
}

.hero .img-container {
    width: 100%;
    display: flex;
}

.hero img {
    max-width: 80%;
    margin: auto;
}

@media screen and (max-width: 940px) {
    .hero .container {
        grid-template-columns: 1fr;
        margin: 1rem 0;
    }
}

.modal-container{
    display:inline-block;
    padding: 0px 32px;
    border: 1px solid var(--primary);
    background-color: var(--primary);
    color: #fff;
    border-radius: 24px 4px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
}

 .modal-container {
    box-shadow: rgb(0 0 0 / 15%) 0px 8px 24px;
}
  
`

const Hero = () => {
    return (
        <Styles>
            <div className='hero'>
                <div className='container'>

                    {/* Left Side */}
                    <div className='left'>
                        <p>Buy & Sell Crypto 24/7 using your retirement account</p>
                        <h1>Invest in Cryptocurreny with Your IRA</h1>
                        <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
                        <div className='input-container'>
                            <input type='email' placeholder='Enter your email' />
                            {/* <button className='btn'>Learn More</button> */}
                            <div className="modal-container">
                                <Modal />

                            </div>

                        </div>
                    </div>

                    {/* Right Side */}
                    <div className='right'>
                        <div className='img-container'>
                            <img src={Crypto} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </Styles>
    )
}

export default Hero;