import React from 'react';
import styles from './Info.module.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from 'react-router-dom';


export default function Info() {

  const navigate = useNavigate();


  return (
    <div className={styles.infoContainer}>
      <div onClick={() => navigate(-1)} className={styles.back}><ChevronLeftIcon/>Назад</div>
      <h1 className={styles.infoTitle}>Info page</h1>
    </div>
  )
}

