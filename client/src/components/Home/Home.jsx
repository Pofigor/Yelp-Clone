import React from 'react';
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>Home page</h1>
      <img className={styles.img} src='/img/1.JPG' alt='img' />
    </div>
  )
}

