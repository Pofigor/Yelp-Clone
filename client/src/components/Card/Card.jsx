import React from 'react';
import styles from './Card.module.css'
import {Button} from '@mui/material'
// import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
// import PaymentIcon from '@mui/icons-material/Payment';
// import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
// import { Link } from 'react-router-dom';
import IconCheckboxes from '../../icons/checkBoxFavourite/checkBoxFavourite'
import BasicRating from '../../icons/restRating/restRating'
import CheckIcon from '@mui/icons-material/Check';
import {Link} from 'react-router-dom'

export default function Card() {

  // const [restaurants, setRestaurants] = React.useState([])

  // React.useEffect(() => {
  //  (async function getRestaurant() {
  //     const restaurant = await fetch('http://localhost:/3001/restaurants')
  //     const res = await restaurant.json();
  //     console.log('res====', res);
  //   })() 
  // })

  // const moreHandler = () => {
  //   console.log('Pressed button!!!');
  // } 


  return (

    <div className={styles.cardContainer}>

      {/* <h1 className={styles.cardTitle}>Card</h1> */}

      <div className={styles.card}>

        <div className={styles.cardWrapper} > 

          <div className={styles.img}><img className={styles.img} src='/img/rest/Lily.jpg' alt='img' /></div>

          <div className={styles.titleBox}>

            <div className={styles.title}>Lily restaurant</div>
            <div className={styles.favorite}><IconCheckboxes/></div>

          </div>
          
          <div className={styles.cardText}>
          
            <div className={styles.description}>
              <p className={styles.descParagraph}>Некоторое описание данного ресторана. 
                Меню представлено европейской кухней. Возможность заказа фирменного блюда от шеф-повара.
                Проведение корпоративов и прочих мероприятий.
              </p>
            </div>

          </div>

          <div className={styles.bottomBox}>

            <div className={styles.leftBox}>

              {/* <p className={styles.tooltip}><TakeoutDiningIcon/> <span className={styles.tooltiptext}>Еда на вынос</span> </p>
              <p className={styles.tooltip}><DeliveryDiningIcon/> <span className={styles.tooltiptext}>Доставка</span> </p>
              <p className={styles.tooltip}><PaymentIcon/> <span className={styles.tooltiptext}>Оплата картой</span> </p> */}
              <p className={styles.CheckIcon}><CheckIcon/><span className={styles.checkIconText}>Еда на вынос</span> </p>
              <p className={styles.CheckIcon}><CheckIcon/><span className={styles.checkIconText}>Доставка</span> </p>
              <p className={styles.CheckIcon}><CheckIcon/><span className={styles.checkIconText}>Оплата картой</span> </p>

            </div>

            <div className={styles.rightBox}>

              <div className={styles.restRating}><BasicRating/></div>

              <Link to={`/restaurants/:id`}>
                <Button className={styles.moreBtn} variant="outlined">VIEW MORE</Button>
              </Link>

            </div>

          </div>



        </div>

      </div>
      
    </div>
  )
}

