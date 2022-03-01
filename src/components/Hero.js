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

.hero .form-container>label{
    display:flex;
    align-items:center;
    margin-top:10px;
}

@media screen and (max-width: 940px) {
    .hero .container {
        grid-template-columns: 1fr;
        margin: 1rem 0;
    }
}

@media screen and (max-width:770px){
    .hero .form-container>label{
        display:block;
    }
    .hero .form-container label>input{
        width:auto;
    }
    .hero .form-container label>input, .hero .form-container label>p{
        display:inline-block;
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

.modal-container{
    color:#2c2929;
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
                            {/* <input type='email' placeholder='Enter your email' /> */}
                            <form action="https://getform.io/f/458bc1bd-10f4-43ee-960d-1295b3543fdf" method="POST">
                                <input type="email" name='email' placeholder='Enter your email' />
                                <button type='submit' className="btn">Sign Up</button>
                                <div className="form-container">
                                    <label><input type="checkbox" /> <p>Yes, I agree to receive emails from Crypto.</p></label>
                                </div>
                            </form>
                            {/* <div className="modal-container"> */}
                            {/* <Modal /> */}
                            {/* <button className="btn-modal">
                                    Sign Up
                                </button> */}
                            {/* </div> */}
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