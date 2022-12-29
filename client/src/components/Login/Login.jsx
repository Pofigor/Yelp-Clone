import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css'
import {Button} from '@mui/material'




export default function Login({setAuth}) {

  const [inputs, setInputs] = useState({name: '', password: ''});

  const navigate = useNavigate();

  const inputHandler = (event) => {
    setInputs((prevInputs) => (
      {...prevInputs, [event.target.name]: event.target.value}
    ));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    if(response.ok) {
      setAuth(true);
      navigate('/')
    }
  };


  return (
    <div className={styles.loginContainer}>

      <div className={styles.cardsContainer}>


        <h1 className={styles.loginTitle}>Login</h1>

        <form className={styles.loginForm} onSubmit={submitHandler}>

          <input type='email' onChange={inputHandler} value={inputs.email} name='email' styles={styles.loginInput} className='form-control' placeholder='email'/>
          
          <input type='password' onChange={inputHandler} value={inputs.password} name='password' styles={styles.passInput} className='form-control' placeholder='password'/>

          <Button type='submit' className={styles.sendBtn} variant="contained">Log in</Button>
        
        </form>
   
      </div>
      
    </div>
  )
}

