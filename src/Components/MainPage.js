import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { mainPageStyles } from './Styles/styles'


export default function MainPage() {
  
// const classes = useStyles();
  

  return (
    <Container sx={mainPageStyles.container}>
      <Box  sx={mainPageStyles.container}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6} md={4}>
            <Typography variant="h4" sx={mainPageStyles.typography}>
              Лучшие приглашения для лучших клиентов! Работаем с вами.
            </Typography>
          </Grid>
          <Grid item xs={6} md={8} sx={mainPageStyles.gridImage}>
            <img src={require('./Content/sales.png')} alt="Sale" style={{position: '',  maxWidth: '100%'}} />
          </Grid>
          <Box sx={mainPageStyles.gridImageSec}>
            <img src={require('./Content/sales.png')} alt="Sale" style={{maxWidth: '100%'}} />
          </Box>
        </Grid>
      </Box>
    </Container>
  )
}
