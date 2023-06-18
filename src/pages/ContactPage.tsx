import React from 'react'
import NumbersComponent from '../components/NumbersComponent'
import { Grid } from '@mui/material'
import InfoComponent from '../components/InfoComponent'

function ContactPage() {
  return (
    <Grid
      container
      justifyContent="space-between"
      style={{ marginTop: '50px' }}
    >
      <Grid item xs={5}>
        <NumbersComponent />
      </Grid>
      <Grid item xs={5}>
        <InfoComponent />
      </Grid>
    </Grid>
  )
}

export default ContactPage
