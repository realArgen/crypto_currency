import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import styled from 'styled-components';


const Styles = styled.div`
.coin-container .content {
    max-width: 740px;
    margin: 1rem auto;
    padding: .7rem 1rem;
    display: flex;
    flex-direction: column;
    background-color: #132055;
    box-shadow: 0px 0px 12px #18191b;
    border-radius: 8px;
    color: #fff;
}
.coin-container{
    margin-top: 60px;
}

.content a{
    text-decoration: none;
    color: rgb(0, 207, 0);
}


.rank {
    margin: .5 0;
}

.rank-btn {
    border: 1px solid #6900ff;
    box-shadow: 0px 0px 8px #6900ff;
    background-color: #6900ff;
    border-radius: 8px;
    padding: .2rem;
}

.info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.info .coin-heading {
    display: flex;
    align-items: center;
    margin: 1rem 0;
}

.info .coin-price {
    display: flex;
    align-items: center;
    justify-content: center;
}

.info p {
    padding-right: 1rem;
}

table {
    margin: .5rem 0;
}

td, th {
    padding: 8px;
    text-align: center;
}

th {
    background-color: rgb(68, 125, 172);
}

.stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    width: 100%;
}

.stats .row {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #808080;
    margin: .6rem 0;
    padding-bottom: .5rem;
}

.stats .row p:first-child {
    color: #c45454;
}

.about h3 {
    margin: 1rem 0;
}

@media screen and (max-width: 700px) {
    .coin-container .content {
        max-width: 100%;
        margin: .5rem;
        padding: 0 .5rem;
    }

    .stats {
        grid-template-columns: 1fr;
    }

    td,th {
        padding: 3px;
    }

    .rank {
        margin: .5rem;
    }

    .rank-btn {
        margin: .5rem 0;
    }
}
`

const Coin = () => {

    const params = useParams();
    const [coin, setCoin] = useState({});

    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;


    useEffect(() => {
        axios.get(url).then((res) => {
            setCoin(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])


    return (
        <Styles>
            <div className='coin-container'>
                <div className='content'>
                    <h1>{coin.name}</h1>
                </div>
                <div className='content'>
                    <div className='rank'>
                        <span className='rank-btn'>Rank # {coin.market_cap_rank}</span>
                    </div>
                    <div className='info'>
                        <div className='coin-heading'>
                            {coin.image ? <img src={coin.image.small} alt='' /> : null}
                            <p>{coin.name}</p>
                            {coin.symbol ? <p>{coin.symbol.toUpperCase()}/USD</p> : null}

                        </div>
                        <div className='coin-price'>
                            {coin.market_data?.current_price ? <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1> : null}
                        </div>
                    </div>
                </div>

                <div className='content'>
                    <table>
                        <thead>
                            <tr>
                                <th>1h</th>
                                <th>24h</th>
                                <th>7d</th>
                                <th>14d</th>
                                <th>30d</th>
                                <th>1yr</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</p> : null}</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='content'>
                    <div className='stats'>
                        <div className='left'>
                            <div className='row'>
                                <h4>24 Hour Low</h4>
                                {coin.market_data?.low_24h ? <p>${coin.market_data.low_24h.usd.toLocaleString()}</p> : null}
                            </div>
                            <div className='row'>
                                <h4>24 Hour High</h4>
                                {coin.market_data?.high_24h ? <p>${coin.market_data.high_24h.usd.toLocaleString()}</p> : null}                            </div>
                            <div />
                        </div>
                        <div className='right'>
                            <div className='row'>
                                <h4>Market Cap</h4>
                                {coin.market_data?.market_cap ? <p>${coin.market_data.market_cap.usd.toLocaleString()}</p> : null}
                            </div>
                            <div className='row'>
                                <h4>Circulating Supply</h4>
                                {coin.market_data ? <p>{coin.market_data.circulating_supply}</p> : null}
                            </div>

                        </div>
                    </div>
                </div>

                <div className='content'>
                    <div className='about'>
                        <h3>About</h3>
                        <p dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),
                        }}>

                        </p>

                    </div>
                </div>

            </div>
        </Styles>
    )
}

export default Coin;