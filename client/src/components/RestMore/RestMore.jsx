import React from 'react';
import styles from './RestMore.module.css'
import Card from '../Card/Card'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from 'react-router-dom';

export default function Restaurants() {

  const navigate = useNavigate();

  return (
    <div className={styles.restContainer}>

      <div onClick={() => navigate(-1)} className={styles.back}><ChevronLeftIcon/>Назад</div>


      <h1 className={styles.restTitle}>More about restouran</h1>

      <Card />
      
    </div>
  )
}

