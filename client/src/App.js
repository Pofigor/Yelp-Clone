import React from 'react';

import Nav from './components/Nav/Nav';

import Home from './components/Home/Home';
import Info from './components/Info/Info';
import Login from './components/Login/Login';
import Restaurants from './components/Restaurants/Restaurants';
import Card from './components/Card/Card';


import styles from './App.module.css'

import { Routes, Route } from 'react-router-dom';

import Container from '@mui/material/Container';


function App() {

  return (
    <div className='app'>

      <header className={styles.appHeader}>
        <Nav />
      </header>

      <Container fixed>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/restaurants' element={<Restaurants />} />
          <Route path='/card' element={<Card />} />
          <Route path='/info' element={<Info />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<>Requested page not found</>} />

        </Routes>

      </Container>
    </div>
  );
}

export default App;
