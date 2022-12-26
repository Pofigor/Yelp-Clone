import React from 'react';

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Restaurants from './components/Restaurants/Restaurants';
import RestMore from './components/RestMore/RestMore'
import Favorite from './components/Favorite/Favorite'


import { Routes, Route } from 'react-router-dom';

import Container from '@mui/material/Container';


function App() {

  return (
    <div className='app'>

      <Container fixed>

        <Nav />

        <Routes>

          <Route path='/'>
            <Route path='' element={<Home />} />
            <Route path='/home/:id' element={<RestMore />} />
          </Route>



          <Route path='/restaurants'>
            <Route path='' element={<Restaurants />} />
            <Route path='/restaurants/:id' element={<RestMore />} />
          </Route>

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route path='/favorite' element={<Favorite />} />

          <Route path='*' element={<>Requested page not found</>} />

        </Routes>

      </Container>
    </div>
  );
}

export default App;

