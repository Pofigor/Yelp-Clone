import React, {useState} from 'react';
import { useNavigate } from 'react-router';
import styles from './Register.module.css'
import {Button} from '@mui/material'

export default function Register({setAuth}) {

  const [inputs, setInputs] = useState({name: '', email: '', password: ''});

  const navigate = useNavigate();


  const inputHandler = (event) => {
    setInputs((prevInputs) => (
      {...prevInputs, [event.target.name]: event.target.value}
    ));
  };


  const submitHandler = async (event) => {
    event.preventDefault();
  
    const response = await fetch ('http://localhost:3001/register', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });

    if (response.ok) {
      setAuth(false);      
      navigate('/login');
    }
  };



  return (
    <div className={styles.registerContainer}>

      <div className={styles.cardsContainer}>


        <h1 className={styles.registerTitle}>Registration</h1>

        <form className={styles.registerForm} onSubmit={submitHandler}>

          <input onChange={inputHandler} value={inputs.name} name='name' type='text' styles={styles.registerName} className='form-control' placeholder='name'/>

          <input onChange={inputHandler} value={inputs.email} name='email' type='email' styles={styles.registerInput} className='form-control' placeholder='email'/>
          
          <input onChange={inputHandler} value={inputs.password} name='password' type='password' styles={styles.passInput} className='form-control' placeholder='password'/>

          <Button type = "submit" className={styles.sendBtn} variant="contained">Registration</Button>
        
        </form>
   
      </div>
      
    </div>
  )
}

