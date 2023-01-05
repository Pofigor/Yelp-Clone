import React, {useState, useEffect} from 'react';

import {Link} from 'react-router-dom'

import BasicRating from '../../icons/BasicRating/BasicRating'

import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import {Button} from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import styles from './Card.module.css'


export default function Card({el, restourant_id, name, desc, img, away, deliwery, pay}) {


  
  
  const [isFaforite, setIsFavorite] = useState(false);

  
  const [value, setValue] = useState(2);


  const onClickFavorite = async () => {
    // setIsFavorite(!isFaforite)

    if(!isFaforite) {
      await fetch ('http://localhost:3001/favorite', {
        method: 'POST',
        credentials: "include",
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({restourant_id, name, desc, img, away, deliwery, pay})
      })
      setIsFavorite(!isFaforite)

    } else {
      fetch ('http://localhost:3001/delete', {
        method: 'DELETE',
        credentials: "include",
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({restourant_id})
      })
    }
    setIsFavorite(!isFaforite)


  }



  return (

    <div className={styles.cards} key={el.id}>
  
      <div className={styles.card}>

        <div className={styles.cardWrapper}>

          <div className={styles.img}>{<img className={styles.img} src={el.img} alt='img' />}</div>

          <div className={styles.titleBox}>

            <div className={styles.title}>{el.name}
            </div>


            <div className={styles.favoriteDiv} onClick={onClickFavorite}>
              
              {
              isFaforite ? 
              (<div className={styles.favoriteTrue}><BookmarkIcon /></div>) 
              :
              (<div className={styles.favoriteFalse}><BookmarkBorderIcon /></div>)
              }

            </div>

          </div>


          <div className={styles.cardText}>

            <div className={styles.description}>
              <p className={styles.descParagraph}>{el.desc}</p>
            </div>

          </div>

          <div className={styles.bottomBox}>

            <div className={styles.leftBox}>

              {
              el.away ? 
              (<p className={styles.CheckIcon}><CheckIcon /><span className={styles.checkIconText}>Еда на вынос</span> </p>)
              :
              (<p className={styles.ClearIcon}><ClearIcon /><span className={styles.clearIconText}>Еда на вынос</span> </p>)
              }


              {el.deliwery ? 
              (<p className={styles.CheckIcon}><CheckIcon /><span className={styles.checkIconText}>Доставка</span> </p>)
              :
              (<p className={styles.ClearIcon}><ClearIcon /><span className={styles.clearIconText}>Доставка</span> </p>)
              }


              {el.pay ? 
              (<p className={styles.CheckIcon}><CheckIcon /><span className={styles.checkIconText}>Оплата картой</span> </p>)
              :
              (<p className={styles.ClearIcon}><ClearIcon /><span className={styles.clearIconText}>Оплата картой</span> </p>)
              }

            </div>



            <div className={styles.rightBox}>

              <div className={styles.restRating}><BasicRating restourant_id={restourant_id} value={value} setValue={setValue}/></div> 


              <Link to={`/restaurants/${el.id}`}>
                <Button className={styles.moreBtn} variant="outlined">VIEW MORE</Button>
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}


