import { Typography } from '@mui/material'
import React from 'react'

const textStyle: React.CSSProperties = { color: 'white', fontSize: 12 }
function InfoComponent() {
  return (
    <>
      <div style={{ textAlign: 'left' }}>
        <Typography style={{ ...textStyle, fontSize: 18 }}>
          Insurance services
        </Typography>
        <div style={{ display: 'flex', marginTop: '20px' }}>
          <Typography style={textStyle}>Medical expenses</Typography>
          <Typography style={{ ...textStyle, marginLeft: '10px' }}>
            Family health insurance
          </Typography>
        </div>
        <div style={{ display: 'flex' }}>
          <Typography style={textStyle}>Vehicle Damage</Typography>
          <Typography style={{ ...textStyle, marginLeft: '10px' }}>
            Property loss
          </Typography>
          <Typography style={{ ...textStyle, marginLeft: '10px' }}>
            Fire
          </Typography>
        </div>
      </div>
      <div style={{ textAlign: 'left', marginTop: '20px' }}>
        <Typography style={{ ...textStyle, fontSize: 18 }}>Company</Typography>
        <div style={{ display: 'flex', marginTop: '20px' }}>
          <Typography style={textStyle}>About us</Typography>
          <Typography style={{ ...textStyle, marginLeft: '10px' }}>
            Career
          </Typography>
          <Typography style={{ ...textStyle, marginLeft: '10px' }}>
            Help
          </Typography>
          <Typography style={{ ...textStyle, marginLeft: '10px' }}>
            FAQ
          </Typography>
          <Typography style={{ ...textStyle, marginLeft: '10px' }}>
            Blog
          </Typography>
        </div>
      </div>
      <div style={{ textAlign: 'left', marginTop: '20px' }}>
        <Typography style={{ ...textStyle, fontSize: 18 }}>Bonus</Typography>
        <div style={{ display: 'flex', marginTop: '20px' }}>
          <Typography style={textStyle}>Get certificate</Typography>
          <Typography style={{ ...textStyle, marginLeft: '10px' }}>
            Affiliate Program
          </Typography>
          <Typography style={{ ...textStyle, marginLeft: '10px' }}>
            Training
          </Typography>
        </div>
      </div>
    </>
  )
}

export default InfoComponent
