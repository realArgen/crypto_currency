import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
.burger-button {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height:25px;
    width: 30px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    box-sizing: border-box;

}

.burger-button:focus {
    outline: none;
}

.burger-button__line {
    width: 30px;
    height: 2px;
    background: white;
}
`

const MainButton = prop => (
    <Styles>
        <button className="burger-button" onClick={prop.click}>
            <div className="burger-button__line" />
            <div className="burger-button__line" />
            <div className="burger-button__line" />
        </button>
    </Styles>
)

export default MainButton;