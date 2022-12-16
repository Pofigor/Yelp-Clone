import React from 'react';
import styles from './Card.module.css'
import {Button} from '@mui/material'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import PaymentIcon from '@mui/icons-material/Payment';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
// import { Link } from 'react-router-dom';
import IconCheckboxes from '../checkBoxFavourite/checkBoxFavourite'
import BasicRating from '../restRating/restRating'

export default function Card() {

  const moreHandler = () => {
    console.log('Pressed button!!!');
  } 


  return (

    <div className={styles.cardContainer}>

      {/* <h1 className={styles.cardTitle}>Card</h1> */}

      <div className={styles.card}>

        <div className={styles.cardWrapper} > 

          <div className={styles.favorite}><IconCheckboxes/></div>


          <div className={styles.img}><img className={styles.img} src='/img/kfc.jpg' alt='img' /></div>

          <div className={styles.cardText}>

            <div className={styles.title}>Andalus restaurant</div>
            
          
            <div className={styles.description}>
              <p className={styles.descParagraph}>Некоторое описание данного ресторана. 
                Меню представлено европейской кухней. Возможность заказа фирменного блюда от шеф-повара.
                Проведение корпоративов и прочих мероприятий.
              </p>
            </div>

          </div>

          <div className={styles.more}>
            <p className={styles.tooltip}><TakeoutDiningIcon/> <span className={styles.tooltiptext}>Еда на вынос</span> </p>
            <p className={styles.tooltip}><DeliveryDiningIcon/> <span className={styles.tooltiptext}>Доставка</span> </p>
            <p className={styles.tooltip}><PaymentIcon/> <span className={styles.tooltiptext}>Оплата картой</span> </p>
            <div className={styles.restRating}><BasicRating/></div>
          </div>

          <Button onClick={moreHandler} className={styles.moreBtn} variant="outlined">VIEW MORE</Button>


        </div>

      </div>
      
    </div>
  )
}

