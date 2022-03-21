import React from 'react';
import styled from 'styled-components';


const Styles = styled.div`
.coin-row{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(16, 25, 150);
    color: #fff;
    box-shadow: 0px 0px 12px #18191b;
    border-radius: 8px;
    margin: 2rem 1rem;
    padding: .7rem 1rem;
}

.coin-row:hover{
    transform: scale(1.04);
    transition: .3s ease-in-out;
    cursor: pointer;
}

.img-symbol img{
    height: 40px;
    margin-right: 8px;
    width: auto;
}

.img-symbol{
    display: flex;
    align-items: center;
}

@media screen and (max-width:720px){
    .hide-mobile{
        display: none;
    }
}
`


const Coinitem = (props) => {
    return (
        <Styles>
            <div className='coin-row'>
                <p>
                    {props.coins.market_cap_rank}
                </p>
                <div className="img-symbol">
                    <img src={props.coins.image} alt="" />
                    <p>{props.coins.symbol.toUpperCase()}</p>
                </div>
                <p>${props.coins.current_price.toLocaleString()}</p>
                <p>${props.coins.price_change_percentage_24h.toFixed(2)}%</p>
                <p className='hide-mobile'>${props.coins.total_volume.toLocaleString()}</p>
                <p className='hide-mobile'>${props.coins.market_cap.toLocaleString()}</p>
            </div>
        </Styles>
    )
}

export default Coinitem;