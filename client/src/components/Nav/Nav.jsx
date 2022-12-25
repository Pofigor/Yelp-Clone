import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import styles from './Nav.module.css'
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import {Button} from '@mui/material'





export default function ButtonAppBar() {
  return (
    <Container fixed>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={styles.navBar} position="static">
        <Toolbar className={styles.nav}>
      
          <div className={styles.leftDiv}>

            <Link to='/' className={styles.homeBtn} color="inherit">Home</Link>
           
            <Link to='/restaurants' className={styles.restLink} color="inherit">Restaurants</Link>

          </div>

          <div className={styles.rightDiv}>
 
            <Link to='/login'><Button className={styles.sendBtn} variant="outlined">Log in</Button></Link>

          </div>

        </Toolbar>
      </AppBar>
    </Box>
    </Container>
  );
}
