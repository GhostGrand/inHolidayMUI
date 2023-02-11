import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { mainPageStyles } from './Styles/styles'


export default function MainPage() {
  
// const classes = useStyles();
  const [offsetY, setoffsetY] = useState(0);
  const handleScroll = () => setoffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container sx={mainPageStyles.container} maxWidth="xl" disableGutters>
      <img src={require('./Content/salesnew2.png')} alt="Sale" style={{width: '100%', objectFit:'cover'}}></img>
      <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white',}}>
      <Typography variant="h3" sx={mainPageStyles.typography}>Лучшие приглашения для лучших клиентов!</Typography>
      <Typography variant="h6" sx={mainPageStyles.typography2}>Лучшие приглашения для лучших клиентов!</Typography>

      {/* <Typography variant='h2' sx={{flexGrow:1, display: { xs: "flex", md: "flex" }}}>Скидка 20% на индивидуальный заказ!</Typography> */}
    </div>
      {/* <Box  sx={mainPageStyles.container}> */}
        {/* <Grid container spacing={2} alignItems="center">
          <Grid item xs={6} md={4}>
            <Typography variant="h4" sx={mainPageStyles.typography}>
              Лучшие приглашения для лучших клиентов! Работаем с вами.
            </Typography>
          </Grid>
          <Grid item xs={6} md={8} sx={mainPageStyles.gridImage}>
            // <img src={require('./Content/sales.png')} alt="Sale" style={{maxWidth: '100%'}} />
          </Grid>
          <Box sx={mainPageStyles.gridImageSec}>
            <img src={require('./Content/sales.png')} alt="Sale" style={{maxWidth: '100%'}} />
          </Box>
        </Grid> */}

      {/* </Box> */}
    </Container>
  )
}
