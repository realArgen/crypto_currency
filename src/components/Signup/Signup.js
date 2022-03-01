import React from 'react';
import Crypto from '../../assets/trade.png';
import styled from 'styled-components';
import Modal from '../Modal/Modal';

const Styles = styled.div`
.signup .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    padding: 3rem 1rem;
    margin-top:20px;
}

.signup .left {
    text-align: center;
}

.signup img {
    width: 300px;
}

.signup img:hover {
    transform: scale(1.1);
    transition: 0.5s ease-in-out;
}

.signup .right p {
    margin: 2rem 0;
}

.signup .btn{
    width:100%;
}



@media screen and (max-width:940px) {
    .signup .container {
        grid-template-columns: 1fr;
    }
}
`

const Signup = () => {
    return (
        <Styles>
            <div className='signup'>
                <div className='container'>

                    {/* left */}
                    <div className='left'>
                        <img src={Crypto} alt='' />
                    </div>

                    {/* right */}
                    <div className='right'>
                        <h2>Earn passive income with crypto.</h2>
                        <p>Earn up to 12% annual rewards on 30+ digital assets. Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits.</p>
                        <div className='input-container'>
                            {/* <input type='email' placeholder='Enter your email' />
                            <button className='btn'>Learn More</button> */}
                            <Modal />
                        </div>
                    </div>
                </div>
            </div>
        </Styles>
    )
}

export default Signup;
