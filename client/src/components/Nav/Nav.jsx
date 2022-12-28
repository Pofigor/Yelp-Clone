import * as React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import styles from './Nav.module.css'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import LogoutIcon from '@mui/icons-material/Logout';



export default function Nav({auth, setAuth}) {

  const navigate = useNavigate();


  const logoutHandler = async (event) => {
    event.preventDefault();

    const response = await fetch ('http://localhost:3001/logout', {
      
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      }
    });

    if(response.ok) {
      
      setAuth(false)
      navigate('/login')
    }
  };


  if(auth === false) {

    return (

      <div className={styles.navContainer}>
    
          <div className={styles.leftDiv}>
    
            <Link to='/' className={styles.homeBtn}>Home</Link>
    
            <Link to='/restaurants' className={styles.restBtn}>Restaurants</Link>
    
          </div>
    
    
          <div className={styles.rightDiv}>
            
            <Link to='/favorite' className={styles.favoriteBtn}><BookmarksIcon sx={{ fontSize: 30 }}/></Link>
            <Link to='/login' className={styles.loginIcon}><LoginIcon fontSize="large"/></Link>
            <Link to='/register' className={styles.registerIcon}><AccountCircleIcon fontSize="large"/></Link>
    
          </div>
    
      </div>
    
    );


  } 

  return (

    <div className={styles.navContainer}>
  
        <div className={styles.leftDiv}>
  
          <Link to='/' className={styles.homeBtn}>Home</Link>
  
          <Link to='/restaurants' className={styles.restBtn}>Restaurants</Link>
  
        </div>
  
  
        <div className={styles.rightDiv}>
          
          <Link to='/favorite' className={styles.favoriteBtn}><BookmarksIcon sx={{ fontSize: 30 }}/></Link>
          <a onClick={logoutHandler} className={styles.logoutIcon}><LogoutIcon fontSize="large"/></a>
          {/* <Link to='/register' className={styles.registerIcon}><AccountCircleIcon fontSize="large"/></Link> */}
  
        </div>
  
    </div>
  
  
  );

    
 
}




