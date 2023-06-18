import { Grid, Typography } from '@mui/material'
import React from 'react'
import PointComponet from '../components/PointComponet'
import UncoverImage from '../components/UncoverImage'

function SupportPage() {
  return (
    <Grid container spacing={4} style={{ marginTop: '20px'}}>
      <Grid item xs={4}>
        <Typography 
          style={{ marginLeft: '10px', color: 'white', fontSize: 70, fontFamily: "Poppins", textAlign: 'left'}}>
            Support at every
        </Typography>
        <Typography 
          style={{ marginLeft: '10px', color: 'white', fontSize: 120, fontFamily: "Poppins", textAlign: 'left'}}>
            Step
        </Typography>
      </Grid>
      <Grid item xs={5}>
        <PointComponet 
          isButton={true}
          details={
            [`Participate in the loyality program. Pay for the online services to get 
              bonuses for our other services. We have a lot of bonuses.`,
              `You can help other people: choose a donation fund and share the link with
              your friends`
            ]}/>
      </Grid>
      <Grid item xs={2}>
        <UncoverImage url='/assets/image1.jpeg'/>
      </Grid>
    </Grid>
  )
}

export default SupportPage