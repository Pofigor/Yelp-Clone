import React from 'react';
import styles from './Login.module.css'
import {Button} from '@mui/material'

export default function Login() {
  return (
    <div className={styles.loginContainer}>

      <h1 className={styles.loginTitle}>Login</h1>

      <div className={styles.loginForm}>

        <input type='email' styles={styles.loginInput} className='form-control' id='input' placeholder='email' name='email'/>
        
        <input type='password' styles={styles.passInput} className='form-control' id='input' placeholder='password' name='password'/>

        <Button className={styles.sendBtn} variant="contained">Log in</Button>
      </div>

    </div>
  )
}

