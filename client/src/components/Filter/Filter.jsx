import React from 'react';

import styles from './Filter.module.css'

import SearchIcon from '@mui/icons-material/Search';

export default function Filter() {
  return (
    <div className={styles.filterContainer}>

      <div className={styles.search}>
        <div className={styles.searchIcon}><SearchIcon/></div> 
        <input className={styles.searchInput} type="text" name='name' placeholder='Restaurants...' />
      </div>

    </div>
  )
}
