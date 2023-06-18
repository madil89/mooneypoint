import React from 'react'
import TeamCard from '../components/TeamCard'
import StarIcon from '@mui/icons-material/Star'
import { Grid, Typography } from '@mui/material'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const team = [
  {
    name: 'Georgia Darcy',
    designation: 'The agency founder',
    about: `With over twenty years of industry experience, 'Darcy's insurance
    prouducts' has learned a lot. Then one thing we know for sure
    about is that we're all about you. If you find search for
    insurance frustrating, we are here to help.`,
  },
  {
    name: 'Emiko Sato',
    designation: 'President',
    about: `With over twenty years of industry experience, 'Darcy's insurance
    prouducts' has learned a lot. Then one thing we know for sure
    about is that we're all about you. If you find search for
    insurance frustrating, we are here to help.`,
  },
]
function TeamPage() {
  return (
    <Grid container spacing={4} style={{ marginTop: '20px' }}>
      <Grid item xs={8}>
        <Carousel>
          {team.map((member, index) => (
            <div>
              <TeamCard
                name={member.name}
                designation={member.designation}
                about={member.about}
              />
            </div>
          ))}
        </Carousel>
      </Grid>
      <Grid item xs={4}>
        <div style={{ display: 'flex' }}>
          <StarIcon
            style={{
              background: 'white',
              borderRadius: 20,
              marginTop: 30,
            }}
          />
          <Typography
            style={{
              marginLeft: '10px',
              color: 'white',
              fontSize: 60,
              fontFamily: 'Poppins',
              textAlign: 'left',
            }}
          >
            Our experts say
          </Typography>
        </div>
      </Grid>
    </Grid>
  )
}

export default TeamPage
