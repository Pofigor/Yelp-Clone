import React from 'react';
import styles from './Card.module.css'
import {Button} from '@mui/material'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import PaymentIcon from '@mui/icons-material/Payment';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';


export default function Card() {
  return (
    <div className={styles.cardContainer}>

      <h1 className={styles.cardTitle}>Card</h1>

      <div className={styles.card}>

        <div className={styles.cardWrapper}>

          <div className={styles.img}><img className={styles.img} src='/img/1.JPG' alt='img' /></div>

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
            <Button className={styles.moreBtn} variant="outlined">VIEW MORE</Button>
            <p className={styles.tooltip}><TakeoutDiningIcon/> <span className={styles.tooltiptext}>Еда на вынос</span> </p>
            <p className={styles.tooltip}><DeliveryDiningIcon/> <span className={styles.tooltiptext}>Доставка</span> </p>
            <p className={styles.tooltip}><PaymentIcon/> <span className={styles.tooltiptext}>Оплата картой</span> </p>
          </div>


        </div>

      </div>
      
    </div>
  )
}

