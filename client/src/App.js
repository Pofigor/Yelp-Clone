import React, { useEffect, useState } from 'react';

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

  const [search, setSearch] = useState('');

  const [auth, setAuth] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/isauth');
        if (response.ok) {
          setAuth((prevAuth) => !prevAuth)
        }
      } catch (error) {
        console.log('ERROR authorization!', error);
      }
    })()
  }, [])


  return (
    <div className='app'>

      <Container fixed>

        <Nav auth={auth} setAuth={setAuth} />

        <Routes>

          <Route path='/'>
            <Route path='' element={<Home search={search} setSearch={setSearch} />} />
            <Route path='/home/:id' element={<RestMore />} />
          </Route>



          <Route path='/restaurants'>
            <Route path='' element={<Restaurants search={search} setSearch={setSearch} />} />
            <Route path='/restaurants/:id' element={<RestMore />} />
          </Route>

          <Route path='/login' element={<Login setAuth={setAuth} />} />
          <Route path='/register' element={<Register setAuth={setAuth} />} />

          <Route path='/favorite' element={<Favorite />} />

          <Route path='*' element={<>Requested page not found</>} />

        </Routes>

      </Container>
    </div>
  );
}

export default App;

