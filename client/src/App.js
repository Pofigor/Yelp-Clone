import React from 'react';

import Nav from './components/Nav/Nav';

import Home from './components/Home/Home';
import Info from './components/Info/Info';
import Login from './components/Login/Login';
import Restaurants from './components/Restaurants/Restaurants';
import RestMore from './components/RestMore/RestMore'


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
          <Route path='/info' element={<Info />} />
          <Route path='/login' element={<Login />} />
          <Route path='/more' element={<RestMore />} />

          <Route path='/restaurants'>          
            <Route path='' element={<Restaurants />} />           
            <Route path=':id' element={<RestMore />} />
          </Route>

          <Route path='*' element={<>Requested page not found</>} />

        </Routes>

      </Container>
    </div>
  );
}

export default App;
