import React from 'react';
import styles from './Register.module.css'
import {Button} from '@mui/material'

export default function Register({setAuth}) {
  return (
    <div className={styles.registerContainer}>

      <div className={styles.cardsContainer}>


        <h1 className={styles.registerTitle}>Registration</h1>

        <div className={styles.registerForm}>

          <input type='text' styles={styles.registerName} className='form-control' id='input' placeholder='name' name='name'/>

          <input type='email' styles={styles.registerInput} className='form-control' id='input' placeholder='email' name='email'/>
          
          <input type='password' styles={styles.passInput} className='form-control' id='input' placeholder='password' name='password'/>

          <Button className={styles.sendBtn} variant="contained">Registration</Button>
        
        </div>
   
      </div>
      
    </div>
  )
}

