import React, {useState} from 'react';

import styles from './Search.module.css'

import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

export default function Search() {

  const [search, setSearch] = useState('')

  const onChangeSearchInput = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div className={styles.searchContainer}>

      <div className={styles.search}>
        <div className={styles.searchIcon}><SearchIcon/></div> 
        <input onChange={onChangeSearchInput} value={search} className={styles.searchInput} type="text" name='name' placeholder='Restaurants...' />
        { search && (<div onClick={() => setSearch('')} className={styles.clearIcon}><ClearIcon/></div>) }
      </div>

      <p className={styles.searchTitle}>{search ? `Поиск по запросу: "${search}"` : 'All restaurants'}</p>

    </div>
  )
}
