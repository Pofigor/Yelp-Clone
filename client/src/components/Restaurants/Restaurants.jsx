import React from 'react';
import styles from './Restaurants.module.css';
// import Card from '../Card/Card';
import IconCheckboxes from '../../icons/checkBoxFavourite/checkBoxFavourite'
import BasicRating from '../../icons/restRating/restRating'
import CheckIcon from '@mui/icons-material/Check';
import {Link} from 'react-router-dom'
import {Button} from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



export default function Restaurants() {

  const navigate = useNavigate();

  const [restaurant, setRestaurant] = React.useState([])
  // console.log("restaurant=============>>>>>", restaurant)

  React.useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://localhost:3001/restaurants')
        // console.log("response====================", response)
        if(response.ok) {
          const rest = await response.json();
          setRestaurant(rest.allRest)
          // console.log("ЗАПИСАЛИ rest B setRestaurant============", rest)
          
        } else {
          console.log('ERROR! Fetch is no OK');
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [])

  console.log("restaurant after useEffect=============>>>>>", restaurant)

  return (

    <>
    
    <div onClick={() => navigate(-1)} className={styles.back}><ChevronLeftIcon />Назад</div>
    
    <div className={styles.restContainer}>

      <div className={styles.cardsContainer}>

        {restaurant.length !== 0 ?

          (

            restaurant.map((el) => (



                <div className={styles.cards}>


                  <div className={styles.card}>

                    <div className={styles.cardWrapper}>

                      <div className={styles.img}>{<img className={styles.img} src={el.img} alt='img' />}</div>

                      <div className={styles.titleBox}>

                        <div className={styles.title}>{el.name}</div>
                        <div className={styles.favorite}><IconCheckboxes /></div>

                      </div>

                      <div className={styles.cardText}>

                        <div className={styles.description}>
                          <p className={styles.descParagraph}>{el.desc}</p>
                        </div>

                      </div>

                      <div className={styles.bottomBox}>

                        <div className={styles.leftBox}>

                          {/* <p className={styles.tooltip}><TakeoutDiningIcon/> <span className={styles.tooltiptext}>Еда на вынос</span> </p>
                      <p className={styles.tooltip}><DeliveryDiningIcon/> <span className={styles.tooltiptext}>Доставка</span> </p>
                      <p className={styles.tooltip}><PaymentIcon/> <span className={styles.tooltiptext}>Оплата картой</span> </p> */}
                          <p className={styles.CheckIcon}><CheckIcon /><span className={styles.checkIconText}>Еда на вынос</span> </p>
                          <p className={styles.CheckIcon}><CheckIcon /><span className={styles.checkIconText}>Доставка</span> </p>
                          <p className={styles.CheckIcon}><CheckIcon /><span className={styles.checkIconText}>Оплата картой</span> </p>

                        </div>

                        <div className={styles.rightBox}>

                          <div className={styles.restRating}><BasicRating /></div>

                          <Link to={`/restaurants/:id`}>
                            <Button className={styles.moreBtn} variant="outlined">VIEW MORE</Button>
                          </Link>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>



            ))





          )

          :

          (

            <div className={styles.loadingDiv}>
              <Box class={styles.loadingDiv}><CircularProgress />
                <div class={styles.loading}>loading...</div>
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





