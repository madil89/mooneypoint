import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import './App.css'
import ImageGrid from './pages/ImageGrid'
import HeadersPage from './pages/HeadersPage'
import TeamPage from './pages/TeamPage'
import SupportPage from './pages/SupportPage'
import AppBarComponent from './pages/AppBarComponent'
import ContactPage from './pages/ContactPage'

const theme = createTheme({
  // typography: {
  //   fontFamily: [
  //     'Poppins'
  //   ].join(',')
  // }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ textAlign: 'center' }}>
        <div
          style={{ maxWidth: 1200, minWidth: 1200, display: 'inline-block' }}
        >
          <AppBarComponent />
          <HeadersPage />
          <ImageGrid />
          <TeamPage />
          <SupportPage />
          <ContactPage />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
