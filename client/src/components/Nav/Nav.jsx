import * as React from 'react';

import { Link } from 'react-router-dom';

import styles from './Nav.module.css'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';



export default function ButtonAppBar() {
  return (

    <div className={styles.navContainer}>

      <div className={styles.leftDiv}>

        <Link to='/' className={styles.homeBtn}>Home</Link>

        <Link to='/restaurants' className={styles.restBtn}>Restaurants</Link>

      </div>

      <div className={styles.rightDiv}>
        
        <Link to='/login' className={styles.loginIcon}><LoginIcon fontSize="large"/></Link>
        <Link to='/register' className={styles.registerIcon}><AccountCircleIcon fontSize="large"/></Link>

      </div>

  </div>


  );
}
