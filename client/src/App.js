import React from 'react';

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Info from './components/Info/Info';
import Login from './components/Login/Login';
import Restaurants from './components/Restaurants/Restaurants';
import RestMore from './components/RestMore/RestMore'


// import styles from './App.module.css'

import { Routes, Route } from 'react-router-dom';

import Container from '@mui/material/Container';


function App() {

  // const [restaurant, setRestaurant] = React.useState([])

  // React.useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await fetch('http://localhost:3001/restaurants')
  //       if (response.ok) {
  //         const rest = await response.json();
  //         setRestaurant(rest)
  //       } else {
  //         console.log('ERROR! Fetch is no OK');
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, [])

  return (
    <div className='app'>

      <header>
        <Nav />
      </header>

      <Container fixed>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/info' element={<Info />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path='/more' element={<RestMore />} /> */}

          <Route path='/restaurants'>
            <Route path='' element={<Restaurants />} />
            <Route path='/restaurants/:id' element={<RestMore />} />
          </Route>

          <Route path='*' element={<>Requested page not found</>} />

        </Routes>

      </Container>
    </div>
  );
}

export default App;

