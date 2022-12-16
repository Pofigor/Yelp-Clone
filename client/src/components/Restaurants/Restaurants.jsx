import React from 'react';
import styles from './Restaurants.module.css'
import Card from '../Card/Card'

export default function Restaurants() {
  return (
    <div className={styles.restContainer}>

      <h1 className={styles.restTitle}>Restaurants</h1>

      <Card />
      
    </div>
  )
}

