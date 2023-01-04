import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';


import styles from './Favorite.module.css'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import Card from '../Card/Card'
import Search from '../Search/Search'


export default function Favorite({search, setSearch}) {

const navigate = useNavigate();

const [favorite, setFavorite] = useState([])
// console.log("favorite=====>>>>", favorite)


  React.useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://localhost:3001/favorite')
        if(response.ok) {
          const favor = await response.json();
          setFavorite(favor.allFavorite)
        } else {
          console.log('ERROR! Fetch is no OK');
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [])
  
  return (
   <>

  <Search search={search} setSearch={setSearch}/>

  <div onClick={() => navigate(-1)} className={styles.back}><ChevronLeftIcon />Назад</div>



    <div className={styles.favoriteContainer}>

      <div className={styles.cardsContainer}>



      {favorite.length !== 0 ? 

      (

        favorite
        .map((el) => <Card el={el} key={el.id} restourant_id={el.restourant_id} />)
        
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
// import {useNavigate} from 'react-router-dom';


// import styles from './Favorite.module.css'

// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';

// import Card from '../Card/Card'
// import Search from '../Search/Search'


// export default function Favorite({search, setSearch}) {

// const navigate = useNavigate();

// const [restaurant, setRestaurant] = useState([])


//   React.useEffect(() => {
//     (async () => {
//       try {
//         const response = await fetch('http://localhost:3001/restaurants')
//         if(response.ok) {
//           const rest = await response.json();
//           setRestaurant(rest.allRest)
//         } else {
//           console.log('ERROR! Fetch is no OK');
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     })();
//   }, [])
  
//   return (
//    <>

//   <Search search={search} setSearch={setSearch}/>

//   <div onClick={() => navigate(-1)} className={styles.back}><ChevronLeftIcon />Назад</div>



//     <div className={styles.favoriteContainer}>

//       <div className={styles.cardsContainer}>



//       {restaurant.length !== 0 ? 

//       (

//         restaurant
//         .filter((item) => item.name.toLowerCase().includes(search.toLocaleLowerCase()))
//         .map((el) => <Card el={el} key={el.id} restourant_id={el.id} />)
        
//       ) 
      
//       : 
      
//       (
//         <div className={styles.loadingDiv}>
//           <Box className={styles.loadingDiv}><CircularProgress />
//             <div className={styles.loading}>loading...</div>
//           </Box>
//         </div>
//       )}
    

//         </div>
//     </div>  
   
//    </>

//   )
// }
