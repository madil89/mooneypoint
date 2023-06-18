import { Grid, Typography } from '@mui/material'
import React from 'react'
import UncoverImage from '../components/UncoverImage'
import PointComponet from '../components/PointComponet'

function HeadersPage() {
  return (
    <Grid container marginY={1} alignContent="center" alignItems='center' justifyItems='center' spacing={3}>
      <Grid item xs={6} style={{ justifyContent: 'center'}}>
        <Typography style={{ color: 'white', fontSize: 80, fontFamily: "Poppins", textAlign: 'left'}}>Darcy's insurance products</Typography>
      </Grid>
      <Grid item xs={2} style={{ justifyContent: 'center'}}>
        <PointComponet details={[
            'Our plans are saving policyholders 30% - 60% on premiums',
            `We offer a choice for low deductables and include no cost value-added
            services`
          ]}
          isButton={false}
        />
      </Grid>
      <Grid item xs={4} style={{ justifyContent: 'center'}}>
          <UncoverImage url="/assets/image1.jpeg"/>
        </Grid>
    </Grid>
  )
}

export default HeadersPage