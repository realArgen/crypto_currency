import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi';
import styled from 'styled-components';

const Styles = styled.div`
.featured {
    width: 100%;
    padding: 8rem 0;
    background-color: var(--background);
    margin-top:20px;
    // clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 90%);
}

.featured .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    padding: 1rem;
}

.featured .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 2rem;
}

.featured .left p {
    margin: 1.5rem 0;
}

.featured .left .btn {
    align-self: flex-start;
}

.featured .right {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.featured .right .card {
    display: flex;
    flex-direction: column;
    padding: 12px 22px;
    margin: .4rem;
    width: 170px;
    height: 170px;
    border-radius: 24px;
    border: 1px solid #d3d3d3;
    box-shadow: rgb(0 0 0 / 12%) 0px 8px 24px;
    text-align: center;
}

.featured .right .card:hover {
    box-shadow: rgb(0 0 0 / 20%) 0px 8px 24px;
}

.featured .card .top {
    display: flex;
    flex-direction: column;
}

.featured .right img {
    width: 50px;
    margin: auto;
    padding: .2rem 0;
}

.featured .icon {
    font-size: 36px;
    margin: auto;
    padding-top: 6px;
    justify-content: center;
    align-items: center;
}

.featured span {
    font-size: 22px;
}

.green {
    color: var(--primary);
}

.red {
    color: #ff0000;
}

.bottom .coins {
    margin:0 auto;
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
    align-items: center;
    padding: 1rem;
}

.bottom .card {
    display: flex;
    flex-direction: column;
    padding: 12px 22px;
    margin: .4rem;
    width: 170px;
    height: 170px;
    border-radius: 24px;
    border: 1px solid #d3d3d3;
    box-shadow: rgb(0 0 0 / 12%) 0px 8px 24px;
    text-align: center;
}

.bottom .card .top {
    display: flex;
    flex-direction: column;
}

.bottom img {
    width: 50px;
    margin: auto;
    padding: .2rem 0;
}

.bottom .icon {
    font-size: 36px;
    margin: auto;
    padding-top: 6px;
    justify-content: center;
    align-items: center;
}

.coins .card:hover {
    box-shadow: rgb(0 0 0 / 20%) 0px 8px 24px;
}

@media screen and (max-width: 940px) {
    .featured .container {
        grid-template-columns: 1fr;
    }


    .featured .left .btn {
        align-self: center;
    }

    .bottom .coins {
        grid-template-columns: repeat(4, 150px);
    }

}

@media screen and (max-width: 478px) {
    .featured .container .right .card {
        width: 100%;
    }
    .bottom .coins {
        grid-template-columns: repeat(1, 150px);
    }
    .bottom .coins .card{
        width:100%;
    }
}
`

const Featured = () => {

    const [data, setData] = useState(null)
    const [show, setShow] = useState(false)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    const showMore = () => {
        setShow(!show)
    }

    // console.log(data)

    if (!data) return null

    return (
        <Styles>

            <div className='featured'>
                <div className='container'>
                    {/* Left */}
                    <div className='left'>
                        <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
                        <p>See all available assets: Cryptocurrencies and NFT's</p>
                        <button className='btn' onClick={showMore}>See More Coins</button>
                    </div>

                    {/* Right */}

                    <div className='right'>

                        {data.filter((card, idx) => idx < 6).map(item => (

                            <div className='card'>
                                <div className='top'>
                                    <img src={item.image} alt='/' />
                                </div>
                                <div>
                                    <h5>{item.name}</h5>
                                    <p>${item.current_price.toLocaleString()}</p>
                                </div>
                                {item.price_change_percentage_24h < 0 ? (
                                    <span className='red'>
                                        <FiArrowDown className='icon' />
                                        {item.price_change_percentage_24h.toFixed(2)}%
                                    </span>
                                ) : (
                                    <span className='green'>
                                        <FiArrowUpRight className='icon' />
                                        {item.price_change_percentage_24h.toFixed(2)}%
                                    </span>
                                )}
                            </div>
                        ))}

                    </div>


                </div>
                <div className="bottom">

                    <div className="coins">

                        {show ?
                            data.map(item => (
                                <div className='card'>
                                    <div className='top'>
                                        <img src={item.image} alt='/' />
                                    </div>
                                    <div>
                                        <h5>{item.name}</h5>
                                        <p>${item.current_price.toLocaleString()}</p>
                                    </div>
                                    {item.price_change_percentage_24h < 0 ? (
                                        <span className='red'>
                                            <FiArrowDown className='icon' />
                                            {item.price_change_percentage_24h.toFixed(2)}%
                                        </span>
                                    ) : (
                                        <span className='green'>
                                            <FiArrowUpRight className='icon' />
                                            {item.price_change_percentage_24h.toFixed(2)}%
                                        </span>
                                    )}
                                </div>
                            )) : ""}
                    </div>
                </div>

            </div>
        </Styles>
    )
}

export default Featured;
