import React, {useState} from 'react';

import styles from './Home.module.css';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import Card from '../Card/Card'
import Search from '../Search/Search'


export default function Home({search, setSearch, auth, restaurant, setRestaurant}) { 


React.useEffect(() => {
  (async () => {
    try {

      const response = await fetch('http://localhost:3001/restaurants')
      const allRestourants = await response.json();

      // console.log("auth====================", auth)

      if(!auth) {
        setRestaurant(allRestourants.allRest)
        // console.log('if=================');
        
      } else {
        // console.log('else=================');

        const userFavorite = await fetch('http://localhost:3001/favorite/user-id', {
          method: 'GET',
          credentials: "include",
          headers: {
            'Content-type': 'application/json',
          },
        });
      
        const restourants = allRestourants.allRest
     
        const favorites = await userFavorite.json();
        const favoritesUser = favorites.allFavoriteUser

        const favIdList = favoritesUser.map(el => el.restourant_id);

        const result = restourants.map(el => ({
          ...el,
          isFavorite: favIdList.includes(el.id) ? true : false,
        }))
        // console.log("result=======================", result)
        
        setRestaurant(result)

      }
      
    } catch (error) {
      console.log(error);
    }
  })();
}, [auth])

    return (
      <>

      <Search search={search} setSearch={setSearch}/>
      
      
      <div className={styles.homeContainer}>
  
        <div className={styles.cardsContainer}>
  
          {restaurant.length !== 0 ?
  
            (
  
              restaurant?.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
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












































// import React, {useState} from 'react';

// import styles from './Home.module.css';

// import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';

// import Card from '../Card/Card'
// import Search from '../Search/Search'


// export default function Home({search, setSearch}) { 


// const [restaurant, setRestaurant] = useState([]);
 

// React.useEffect(() => {
//   (async () => {
//     try {
//       const response = await fetch('http://localhost:3001/restaurants')
//       // сделать запрос, который принимает все фэйвориты текущего пользователя
//       const userFavorite = await fetch('http://localhost:3001/favorite/user-id', {
//         method: 'GET',
//         credentials: "include",
//         headers: {
//           'Content-type': 'application/json',
//         },
//       });

//       if(response.ok) {
//         const rest = await response.json();
//         setRestaurant(rest.allRest)
//       } else {
//         console.log('ERROR! Fetch is no OK');
//       }

//     // сравнить оба фэйворита через инклюд, допустим: если в фэйворите есть объект, то добавляем ключ ТРУ
//     } catch (error) {
//       console.log(error);
//     }
//   })();
// }, [])

//     return (
//       <>

//       <Search search={search} setSearch={setSearch}/>
      
      
//       <div className={styles.homeContainer}>
  
//         <div className={styles.cardsContainer}>
  
//           {restaurant.length !== 0 ?
  
//             (
  
//               restaurant
//               .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
//               .map((el) => <Card el={el} key={el.id} restourant_id={el.id} name={el.name} desc={el.desc} img={el.img} away={el.away} deliwery={el.deliwery} pay={el.pay}/>)
  
//             )
  
//             :
  
//             (
  
//               <div className={styles.loadingDiv}>
//                 <Box className={styles.loadingDiv}><CircularProgress />
//                   <div className={styles.loading}>loading...</div>
//                 </Box>
//               </div>
  
//             )}
  
//           </div>
//       </div>  
//       </>

//   )
// }

