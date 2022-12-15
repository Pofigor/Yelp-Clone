import React from 'react';
import styles from './Login.module.css'

export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <h1>Login page</h1>
      <img className={styles.img} src='/img/3.jpg' alt='img' />
    </div>
  )
}

