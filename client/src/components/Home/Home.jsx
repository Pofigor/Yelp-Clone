import React, {useState} from 'react';

import styles from './Home.module.css';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import Card from '../Card/Card'
import Search from '../Search/Search'


export default function Home({search, setSearch}) { 


const [restaurant, setRestaurant] = useState([]);
 

React.useEffect(() => {
  (async () => {
    try {
      const response = await fetch('http://localhost:3001/restaurants')
      // сделать запрос, который принимает все фэйвориты текущего пользователя
      
      if(response.ok) {
        const rest = await response.json();
        setRestaurant(rest.allRest)
      } else {
        console.log('ERROR! Fetch is no OK');
      }

    // сравнить оба фэйворита через инклюд, допустим: если в фэйворите есть объект, то добавляем ключ ТРУ
    } catch (error) {
      console.log(error);
    }
  })();
}, [])

    return (
      <>

      <Search search={search} setSearch={setSearch}/>
      
      
      <div className={styles.homeContainer}>
  
        <div className={styles.cardsContainer}>
  
          {restaurant.length !== 0 ?
  
            (
  
              restaurant
              .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
              .map((el) => <Card el={el} key={el.id} restourant_id={el.id} name={el.name} desc={el.desc} img={el.img} away={el.away} deliwery={el.deliwery} pay={el.pay}/>)
  
            )
  
            :
  
            (
  
              <div className={styles.loadingDiv}>
                <Box className={styles.loadingDiv}><CircularProgress />
                  <div className={styles.loading}>loading...</div>
                </Box>
              </div>
  
            )}
  
          </div>
      </div>  
      </>

  )
}

