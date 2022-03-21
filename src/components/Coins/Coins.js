import React from 'react';
import { Link } from 'react-router-dom';
import Coin from '../routes/Coin';
import Coinitem from '../Coinitem/Coinitem';
import styled from 'styled-components';

const Styles = styled.div`
.container{
    max-width: 1140px;
    margin: auto;
}

.mt-80{
    margin-top: 80px;
}

.heading{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #26272b;
    box-shadow: 0px 0px 12px #18191b;
    border-radius: 8px;
    margin: 2rem 1rem;
    padding: .7rem 1rem;
    font-weight: 700;
}

.heading p{
    color: aliceblue;
}

.coin-name{
    margin-left: -4rem;
}

.container .heading{
    background-color: rgb(16, 25, 150);
}

@media screen and (max-width:720px){
    .hide-mobile{
        display: none;
    }
}
`


const Coins = (props) => {
    return (
        <Styles>
            <div className='container mt-80'>
                <div>
                    <div className="heading">
                        <p>#</p>
                        <p className='coin-name'>Coin</p>
                        <p>Price</p>
                        <p>24h</p>
                        <p className='hide-mobile'>Volume</p>
                        <p className='hide-mobile'>Mkt Cap</p>
                        <p>#</p>
                    </div>

                    {props.coins.map((coins) => {
                        return (
                            <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                                <Coinitem coins={coins} />
                            </Link>
                        )
                    })}

                </div>

            </div>
        </Styles>
    )
}

export default Coins;