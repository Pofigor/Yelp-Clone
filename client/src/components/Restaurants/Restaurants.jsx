import React from 'react';
import {useNavigate} from 'react-router-dom';

import styles from './Restaurants.module.css';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Search from '../Search/Search';
import Card from '../Card/Card'


export default function Restaurants({search, setSearch}) {

  const navigate = useNavigate();

  const [restaurant, setRestaurant] = React.useState([])

  React.useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://localhost:3001/restaurants')
        if(response.ok) {
          const rest = await response.json();
          setRestaurant(rest.allRest)
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
    
    <div className={styles.restContainer}>

      <div className={styles.cardsContainer}>

        {restaurant.length !== 0 ?

          (

            restaurant
            .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
            // .map((el) => <Card el={el} key={el.id} restourant_id={el.id}/>)
            .map((el) => <Card el={el} key={el.id} />)


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





















// <div className={styles.cards}>


// <div className={styles.card}>

//   <div className={styles.cardWrapper}>

//     {/* <div className={styles.img}>{<img className={styles.img} src={el.img} alt='img' />}</div> */}

//     <div className={styles.titleBox}>

//       {/* <div className={styles.title}>{el.name}</div> */}
//       <div className={styles.favorite}><IconCheckboxes /></div>

//     </div>

//     <div className={styles.cardText}>

//       <div className={styles.description}>
//         {/* <p className={styles.descParagraph}>{el.desc}</p> */}
//       </div>

//     </div>

//     <div className={styles.bottomBox}>

//       <div className={styles.leftBox}>

//         {/* <p className={styles.tooltip}><TakeoutDiningIcon/> <span className={styles.tooltiptext}>Еда на вынос</span> </p>
//         <p className={styles.tooltip}><DeliveryDiningIcon/> <span className={styles.tooltiptext}>Доставка</span> </p>
//         <p className={styles.tooltip}><PaymentIcon/> <span className={styles.tooltiptext}>Оплата картой</span> </p> */}
//         <p className={styles.CheckIcon}><CheckIcon /><span className={styles.checkIconText}>Еда на вынос</span> </p>
//         <p className={styles.CheckIcon}><CheckIcon /><span className={styles.checkIconText}>Доставка</span> </p>
//         <p className={styles.CheckIcon}><CheckIcon /><span className={styles.checkIconText}>Оплата картой</span> </p>

//       </div>

//       <div className={styles.rightBox}>

//         <div className={styles.restRating}><BasicRating /></div>

//         <Link to={`/restaurants/:id`}>
//           <Button className={styles.moreBtn} variant="outlined">VIEW MORE</Button>
//         </Link>

//       </div>

//     </div>

//   </div>

// </div>

// </div>





