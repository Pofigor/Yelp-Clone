import React, {useState} from 'react';

import {Link} from 'react-router-dom'

import BasicRating from '../../icons/restRating/restRating'

import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import {Button} from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import styles from './Card.module.css'



export default function Card({el, auth, setAuth}) {
// export default function Card({el, auth, setAuth, restourant_id}) {


const [isFaforite, setIsFavorite] = useState(false);

 const onClickFavorite = () => {
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
              {/* //////первая строчка - базовая, отображает рейтинг. Вторая - вариант, пробовал, оставил на всякий случай */}
              {/* <div className={styles.restRating}><BasicRating /></div> */} 
              {/* <div className={styles.restRating}><BasicRating restourant_id={restourant_id}/></div> */}


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

