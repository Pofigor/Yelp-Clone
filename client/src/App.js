import React from 'react';

import Nav from './components/Nav/Nav'

import { Routes, Route } from 'react-router-dom'

import Container from '@mui/material/Container';


function App() {
  return (
    <div className='app'>

      <header className='app-header'>
        <Nav />
      </header>

      <Container fixed>
        <Routes>

          <Route path='/' element={<img src='/img/1.JPG' alt='img' />} />
          <Route path='/info' element={<img src='/img/2.jpg' alt='img' />} />
          <Route path='/login' element={<img src='/img/3.jpg' alt='img' />} />

        </Routes>

      </Container>
    </div>
  );
}

export default App;
