import React from 'react';
import styles from './Login.module.css'
import {Button} from '@mui/material'

export default function Login() {
  return (
    <div className={styles.loginContainer}>

      <h1 className={styles.loginTitle}>Login page</h1>

      <div className={styles.loginForm}>

        <input type='text' styles={styles.loginInput} className='form-control' id='input' placeholder='Write your name' name='title'/>
        
        <Button className={styles.sendBtn} variant="contained">Log in</Button>
      </div>

      <img className={styles.img} src='/img/3.jpg' alt='img' />
    </div>
  )
}

