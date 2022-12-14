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

  const [restaurant, setRestaurant] = useState([]);


  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://localhost:3001/isauth', {
          method: 'GET',
          credentials: 'include'
        })

        if (response.ok) {
          setAuth(true)
        }
      } catch (error) {
        console.log('ERROR authorization!', error);
      }
    })()
  }, []);


  return (
    <div className='app'>

      <Container fixed>

        <Nav auth={auth} setAuth={setAuth} />

        <Routes>

          <Route path='/'>
            <Route path='' element={<Home search={search} setSearch={setSearch} auth={auth} restaurant={restaurant} setRestaurant={setRestaurant} />} />
            <Route path='/home/:id' element={<RestMore />} />
          </Route>



          <Route path='/restaurants'>
            <Route path='' element={<Restaurants search={search} setSearch={setSearch} />} />
            <Route path='/restaurants/:id' element={<RestMore />} />
          </Route>

          <Route path='/login' element={<Login setAuth={setAuth} />} />
          <Route path='/register' element={<Register setAuth={setAuth} />} />


          <Route path='/favorite' element={<Favorite search={search} setSearch={setSearch} />} />

          <Route path='*' element={<>Requested page not found</>} />

        </Routes>

      </Container>
    </div>
  );
}

export default App;

