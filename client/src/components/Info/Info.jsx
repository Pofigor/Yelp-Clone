import React from 'react';
import styles from './Info.module.css'


export default function Info() {
  return (
    <div className={styles.infoContainer}>
      <h1>Info page</h1>
      <img className={styles.img} src='/img/2.jpg' alt='img' />
    </div>
  )
}

