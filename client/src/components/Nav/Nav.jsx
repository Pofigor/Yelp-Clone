import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import styles from './Nav.module.css'
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';



export default function ButtonAppBar() {
  return (
    <Container fixed>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={styles.navBar} position="static">
        <Toolbar className={styles.nav}>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <div className={styles.leftDiv}>

            <Link to='/' className={styles.homeBtn} color="inherit">Home</Link>
           
            <Link to='/restaurants' className={styles.restLink} color="inherit">Restaurants</Link>

            <Link to='/info' className={styles.infoBtn} color="inherit">Info</Link>
            
          </div>

          <div className={styles.rightDiv}>
            <Link to='/login' className={styles.loginBtn} color="inherit">Login</Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
    </Container>
  );
}
