import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';

import Menu from './components/Navigation/Menu/Menu';
import Background from './components/Navigation/Background/Background';
import SideMenu from './components/Navigation/SideMenu/SideMenu';
import Footer from "./components/Footer/Footer";
import Featured from "./components/Featured/Featured";
import Hero from "./components/Hero/Hero";
import Signup from "./components/Signup/Signup";

import Coins from './components/Coins/Coins';
import Coin from './components/routes/Coin';
import './index.css';

const App = () => {

  const [sideMenuOpen, setMenuState] = useState(false);

  const menuToggleClickHandler = () => {
    setMenuState(!sideMenuOpen)
  };

  const backStateClickHandler = () => {
    setMenuState(false)
  }

  const [coins, setCoins] = useState([]);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
    }).catch((error) => {
      console.log(error);
    })
  }, [])

  return (
    <>
      <Menu clickHandler={menuToggleClickHandler} />
      <Routes>
        <Route path='/' element={<Coins coins={coins} />} />
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route>
        <Route path='/featured' element={<Featured data={coins} />} />
        <Route path='/hero' element={<Hero />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>

      {sideMenuOpen ? <Background click={backStateClickHandler} /> : ''}

      <SideMenu show={sideMenuOpen} remove={backStateClickHandler} />

      <Footer />

    </>
  );
}

export default App;
