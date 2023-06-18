import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material'
import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium'
import KeyIcon from '@mui/icons-material/Key'
import React from 'react'
const navItems = ['Home', 'Services', 'About us', 'Blog', 'Career']

function AppBarComponent() {
  return (
    <Box
      sx={{
        display: 'flex',
        background: '#0b0f17',
        marginBottom: '30px',
      }}
    >
      <AppBar sx={{ background: '#0b0f17' }} elevation={0} position="relative">
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start">
            <BrightnessMediumIcon sx={{ color: '#ff6475' }} />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
          <Button
            variant="contained"
            sx={{
              borderRadius: '20px',
              height: '35px',
              background: '#84d7e9',
              '&:hover': {
                background: '#84d7e9',
              },
              color: 'black',
              marginRight: '20px',
            }}
          >
            Contact us
          </Button>
          <IconButton>
            <KeyIcon sx={{ color: 'white', transform: 'rotate(-45deg)' }} />
          </IconButton>
          <Button variant="text" sx={{ color: 'white' }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default AppBarComponent
