import React from 'react'
import UncoverImage from '../components/UncoverImage'
import ImageWithText from '../components/ImageWithText'
import { Grid } from '@mui/material'
import TextCardComponent from '../components/TextCardComponent'
function ImageGrid() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6} style={{ justifyContent: 'center' }}>
          <ImageWithText
            url="https://source.unsplash.com/jpqyfK7GB4w/1920x1281"
            description="Home insurance"
          />
        </Grid>
        <Grid item xs={2} style={{ justifyContent: 'center' }}>
          <UncoverImage url="/assets/image1.jpeg" />
        </Grid>
        <Grid item xs={4} style={{ justifyContent: 'center' }}>
          <TextCardComponent />
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: '30px' }}>
        <Grid item xs={4}>
          <ImageWithText
            url="https://source.unsplash.com/jpqyfK7GB4w/1920x1281"
            description="Vehicle damage"
          />
        </Grid>
        <Grid item xs={4}>
          <ImageWithText
            url="https://source.unsplash.com/jpqyfK7GB4w/1920x1281"
            description="Montgage insurance"
          />
        </Grid>
        <Grid item xs={4}>
          <ImageWithText
            url="https://source.unsplash.com/jpqyfK7GB4w/1920x1281"
            description="Medical expenses"
          />
        </Grid>
      </Grid>
    </>
  )
}

export default ImageGrid
