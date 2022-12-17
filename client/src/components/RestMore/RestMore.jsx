import React from 'react';
import styles from './RestMore.module.css'
import Card from '../Card/Card'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate, useParams } from 'react-router-dom';

export default function Restaurants() {

  const navigate = useNavigate();

  const {id} = useParams();

  React.useEffect(() => {
   ( async function getOneRest() {
      const res = await fetch(`http://localhost:3001/${id}`)
      const resToJson = await res.json()
      console.log('resToJson=========>>>', resToJson);
    })()
  })

  return (
    <div className={styles.restContainer}>

      <div onClick={() => navigate(-1)} className={styles.back}><ChevronLeftIcon/>Назад</div>

      <h1 className={styles.restTitle}>More about restouran</h1>

      <Card />
      
    </div>
  )
}

