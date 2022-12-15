import React from 'react';

import Nav from './components/Nav/Nav';

import Home from './components/Home/Home';
import Info from './components/Info/Info';
import Login from './components/Login/Login';



import { Routes, Route } from 'react-router-dom';

import Container from '@mui/material/Container';


function App() {
  return (
    <div className='app'>

      <header className='app-header'>
        <Nav />
      </header>

      <Container fixed>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/info' element={<Info />} />
          <Route path='/login' element={<Login />} />

        </Routes>

      </Container>
    </div>
  );
}

export default App;
