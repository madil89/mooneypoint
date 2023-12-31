import { Button, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import { useSpring, animated } from '@react-spring/web'
import UncoverImage from './UncoverImage'

function TeamCard({
  name,
  designation,
  about,
}: {
  name: string
  designation: string
  about: string
}) {
  const styles = useSpring({
    from: { opacity: 0, transform: 'scale(0.6)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { duration: 2000 },
  })

  return (
    <animated.div style={styles}>
      <Card sx={{ background: '#1f283d', borderRadius: '30px' }}>
        <Grid container margin={3} spacing={5}>
          <Grid item xs={2.5}>
            <UncoverImage url="/assets/image1.jpeg" />
          </Grid>
          <Grid item xs={8}>
            <div style={{ flex: 1, height: '100%', textAlign: 'left' }}>
              <Typography
                variant="h4"
                style={{ color: 'white', marginBottom: '10px' }}
              >
                {name}
              </Typography>
              <Typography
                variant="body1"
                style={{ color: 'white', marginBottom: '10px' }}
              >
                {designation}
              </Typography>
              <Typography style={{ color: 'white' }}>{about}</Typography>
              <Button
                variant="contained"
                style={{
                  width: '300px',
                  height: '40px',
                  borderRadius: '20px',
                  background: '#84d7e9',
                  color: 'black',
                  marginTop: '40px',
                  marginBottom: '20px',
                }}
              >
                Get a consultation
              </Button>
            </div>
          </Grid>
        </Grid>
      </Card>
    </animated.div>
  )
}

export default TeamCard
