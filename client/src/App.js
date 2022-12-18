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

  const [restaurant, setRestaurant] = React.useState(
    [{
      id: 1,
      name: 'KAIYŌ Rooftop',
      desc: 'KAIYŌ Rooftop is a tropical oasis in the sky, an immersive Nikkei experience that transports guests the moment they walk through the elevator door. Plants, rich textiles, colorful fabrics, soft lighting and stunning food/cocktails invite guests to explore the Japanese culinary influence within Peruvian culture.',
      img: '/img/rest/KAIYŌRooftop.jpg',
    },
    {
      id: 2,
      name: '8MilePi Detroit',
      desc: 'Our pies are inspired by the famous pizzerias in Detroit Buddy and Luigi. Our thick rectangular pies are baked in special steel pans with mozzarella, brick cheese, the highest quality toppings, with our delicious homemade tomato sauce layered on top.',
      img: '/img/rest/8mile.jpg',
    },
    {
      id: 3,
      name: 'KFC',
      desc: 'KFC Corporation, based in Louisville, Kentucky, is one of the few brands in America that can boast a rich, decades-long history of success and innovation. It all started with one cook who created a soon-to-be world-famous recipe more than 70 years ago, a list of secret herbs and spices scratched out on the back of the door to his kitchen. That cook was Colonel Harland Sanders, of course, and now KFC is the world most popular chicken restaurant chain, specializing in that same Original Recipe® along with Extra Crispy™ chicken, home-style sides, and buttermilk biscuits. ',
      img: '/img/rest/kfc.jpg',
    },
    {
      id: 4,
      name: 'The Snug',
      desc: 'Established in 2017. Four friends look to share their passion for great food, strong drinks, and the best beer and wine California has to offer.',
      img: '/img/rest/Snug.jpg',
    },
    {
      id: 5,
      name: 'Damansara',
      desc: 'Our pies are inspired by the famous pizzerias in Detroit Buddy and Luigi. Our thick rectangular pies are baked in special steel pans with mozzarella, brick cheese, the highest quality toppings, with our delicious homemade tomato sauce layered on top.',
      img: '/img/rest/Damansara.jpg',
    },
    {
      id: 6,
      name: 'Lily',
      desc: 'Lily in the sky, an immersive Nikkei experience that transports guests the moment they walk through the elevator door. Plants, rich textiles, colorful fabrics, soft lighting and stunning food/cocktails invite guests to explore the Japanese culinary influence within Peruvian culture.',
      img: '/img/rest/Lily.jpg',
    },
    {
      id: 7,
      name: 'Savor',
      desc: 'Savor based in Youta, Michigan, in America that can boast a rich, decades-long history of success and innovation. It all started with one cook who created a soon-to-be world-famous recipe more than 70 years ago, a list of secret herbs and spices scratched out on the back of the door to his kitchen. That cook was Colonel Harland Sanders, of course, and now KFC is the world most popular chicken restaurant chain, specializing in that same Original Recipe® along with Extra Crispy™ chicken, home-style sides, and buttermilk biscuits. ',
      img: '/img/rest/Savor.jpg',
    },
    {
      id: 8,
      name: 'Sotto Mare',
      desc: 'Established in 2017. Four friends look to share their passion for great food, strong drinks, and the best beer and wine California has to offer.',
      img: '/img/rest/SottoMare.jpg',
    }]
  )

  return (
    <div className='app'>

      <header className={styles.appHeader}>
        <Nav />
      </header>

      <Container fixed>
        <Routes>

          <Route path='/' element={<Home restaurant={restaurant} setRestaurant={setRestaurant} />} />
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
