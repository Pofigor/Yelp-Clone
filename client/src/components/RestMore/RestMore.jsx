import React from 'react';
import styles from './RestMore.module.css'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate, useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom'
import {Button} from '@mui/material'
import BasicRating from '../../icons/restRating/restRating'
import CheckIcon from '@mui/icons-material/Check';
import IconCheckboxes from '../../icons/checkBoxFavourite/checkBoxFavourite'


export default function RestMore() {

  const navigate = useNavigate();

  const {id} = useParams();

  const [more, setMore] = React.useState([])

  React.useEffect(() => {
   ( async () => {
      try {
        const response = await fetch(`http://localhost:3001/restaurants/${id}`)
        if(response.ok) {
          const oneRest = await response.json()
          setMore(oneRest.oneRest)
        } else {
          console.log('ERROR! Fetch is no OK');
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (

    <>
    
    <div onClick={() => navigate(-1)} className={styles.back}><ChevronLeftIcon />Назад</div>
    
    <div className={styles.restContainer}>

      <div className={styles.cardsContainer}>

        {more ?

          (

                <div className={styles.cards}>

                  <div className={styles.card}>

                    <div className={styles.cardWrapper}>

                      <div className={styles.topDiv}>

                        <div className={styles.leftDiv}>
                          <div className={styles.img}>{<img className={styles.img} src={more.img} alt='img' />}</div>
                        </div>


                        <div className={styles.rightDiv}>

                          <div className={styles.titleBox}>
                            <div className={styles.title}>{more.name}</div>
                            <div className={styles.favorite}><IconCheckboxes /></div>
                          </div>

                          <div className={styles.cardText}>
                              <p className={styles.descParagraph}>{more.desc}</p>
                          </div>

                          <div className={styles.restRating}><BasicRating /></div>

                          
                        </div>

                      </div>
                      <hr />
                      <div className={styles.bottomDiv}>

                        <div className={styles.first}></div>

                        <div className={styles.second}></div>

                        <div className={styles.third}>
                          <p className={styles.CheckIcon}><CheckIcon /><span className={styles.checkIconText}>Еда на вынос</span> </p>
                          <p className={styles.CheckIcon}><CheckIcon /><span className={styles.checkIconText}>Доставка</span> </p>
                          <p className={styles.CheckIcon}><CheckIcon /><span className={styles.checkIconText}>Оплата картой</span> </p>
                        </div>

                      </div>

                    </div>

                  </div>

                </div>
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
        

