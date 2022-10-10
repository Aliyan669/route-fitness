import React from 'react';
import '../App.css';
import  Grid from '@mui/material/Grid';
export default function Gallery() {
  return (
    <div className='app3'>
      <div className='gal'>
      <div>
        <img src="fit2.png" />
      </div>
      <Grid container spacing={0}>
      <Grid item lg={4} md={6}>
        <div className='boxdiv' width="500px">
          <img width="410px" height="350px" src="gallery7.jpg" />
        </div>
        </Grid>  
        <Grid item lg={4} md={6}>
        <div className='boxdiv'>
        <img width="410px" height="340px" src="gallery1.jpg" />
        </div>
        </Grid>  
        <Grid item lg={4} md={6}>
        <div className='boxdiv'>
        <img width="410px" height="340px" src="gallery6.webp" />
        </div>
        </Grid>  
        <Grid item lg={6} md={6}>
        <div className='boxdiv2'>
        <img width="450px" height="310px" src="gallery5.webp" /> 
        </div>
        </Grid>
        <Grid item lg={6} md={6}>
        <div className='boxdiv'>
        <img width="450px" height="310px" src="gallery4.webp" />
        </div>
        </Grid>
      </Grid>
      </div>
    </div>
  )
}
