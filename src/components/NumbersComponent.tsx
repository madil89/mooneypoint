import {
  Button,
  Chip,
  InputAdornment,
  OutlinedInput,
  Typography,
} from '@mui/material'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import React from 'react'

const chipStyle: React.CSSProperties = {
  color: 'white',
  background: '#1f283d',
  marginLeft: '20px',
}

function NumbersComponent() {
  return (
    <div style={{ textAlign: 'left' }}>
      <Typography
        style={{
          color: 'white',
          fontSize: 40,
          fontFamily: 'Poppins',
          marginBottom: '30px',
        }}
      >
        Need numbers?
      </Typography>
      <div>
        <Chip
          label="Travel"
          variant="filled"
          style={{ color: 'black', background: 'white' }}
        />
        <Chip label="Health" variant="filled" style={chipStyle} />
        <Chip label="CASCO" variant="filled" style={chipStyle} />
        <Chip label="Mortgage" variant="filled" style={chipStyle} />
        <Chip label="Fire" variant="filled" style={chipStyle} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '30px' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginRight: '20px',
          }}
        >
          <label style={{ color: 'white' }}>Enter the country</label>
          <OutlinedInput
            id="standard-basic"
            label="Australia"
            sx={{
              color: 'white',
              background: '#1f283d',
              borderRadius: '30px',
              borderColor: '#1f283d',
              marginTop: '20px',
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <label style={{ color: 'white' }}>Choose travel dates</label>
          <OutlinedInput
            id="standard-basic"
            label="Standard"
            sx={{
              color: 'white',
              background: '#1f283d',
              borderRadius: '30px',
              borderColor: '#1f283d',
              marginTop: '20px',
            }}
            endAdornment={
              <InputAdornment position="start">
                <CalendarTodayIcon />
              </InputAdornment>
            }
          />
        </div>
      </div>
      <Button
        variant="contained"
        sx={{
          width: '450px',
          height: '45px',
          background: '#ff6476',
          borderColor: '#ff6476',
          borderRadius: '20px',
          marginTop: '20px',
        }}
      >
        Calculate
      </Button>
    </div>
  )
}

export default NumbersComponent
