import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';


import styles from './Favorite.module.css'

import IconCheckboxes from '../../icons/checkBoxFavourite/checkBoxFavourite'
import BasicRating from '../../icons/restRating/restRating'

import CheckIcon from '@mui/icons-material/Check';
import {Button} from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';


export default function Favorite() {


  const [search, setSearch] = useState('')

  const onChangeSearchInput = (event) => {
    setSearch(event.target.value)
  }


  const navigate = useNavigate();


  const [restaurant, setRestaurant] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://localhost:3001/restaurants')
        if(response.ok) {
          const rest = await response.json();
          setRestaurant(rest.allRest)
        } else {
          console.log('ERROR! Fetch is no OK');
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [])
  

  return (

   <>


<div className={styles.searchContainer}>

  <div className={styles.search}>
    <div className={styles.searchIcon}><SearchIcon/></div> 
    <input onChange={onChangeSearchInput} value={search} className={styles.searchInput} type="text" name='name' placeholder='Restaurants...' />
    { search && (<div onClick={() => setSearch('')} className={styles.clearIcon}><ClearIcon/></div>) }
  </div>

  <p className={styles.searchTitle}>{search ? `Поиск по запросу: "${search}"` : 'All restaurants'}</p>

</div>

   
    <div onClick={() => navigate(-1)} className={styles.back}><ChevronLeftIcon />Назад</div>
    
    <div className={styles.favoriteContainer}>

      <div className={styles.cardsContainer}>



                {restaurant.length !== 0 ? 

                (

                  restaurant
                  .filter((item) => item.name.toLowerCase().includes(search.toLocaleLowerCase()))
                  .map((el) => (

                    <div className={styles.cards} key={el.id}>

                      <div className={styles.card}>

                        <div className={styles.cardWrapper}>

                          <div className={styles.img}>{<img className={styles.img} src={el.img} alt='img' />}</div>

                          <div className={styles.titleBox}>

                            <div className={styles.title}>{el.name}</div>
                            <div className={styles.favorite}><IconCheckboxes /></div>

                          </div>

                          <div className={styles.cardText}>

                            <div className={styles.description}>
                              <p className={styles.descParagraph}>{el.desc}</p>
                            </div>

                          </div>

                          <div className={styles.bottomBox}>

                            <div className={styles.leftBox}>

                              <p className={styles.CheckIcon}><CheckIcon /><span className={styles.checkIconText}>Еда на вынос</span> </p>
                              <p className={styles.CheckIcon}><CheckIcon /><span className={styles.checkIconText}>Доставка</span> </p>
                              <p className={styles.CheckIcon}><CheckIcon /><span className={styles.checkIconText}>Оплата картой</span> </p>

                            </div>

                            <div className={styles.rightBox}>

                              <div className={styles.favoriteRating}><BasicRating /></div>

                              <Link to={`#`}>
                                <Button className={styles.moreBtn} variant="outlined">VIEW MORE</Button>
                              </Link>

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>
                  ))
                  
                ) 
                
                : 
                
                (
                  <div className={styles.loadingDiv}>
                    <Box className={styles.loadingDiv}><CircularProgress />
                      <div className={styles.loading}>loading...</div>
                    </Box>
                  </div>
                )}
    

        </div>
    </div>  
   
   </>

  )
}