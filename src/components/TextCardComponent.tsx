import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material'
import React from 'react'

function TextCardComponent() {
  return (
    <Card
      sx={{
        backgroundColor: '#1f283d',
        borderRadius: '35px',
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardHeader title="Best Choice" sx={{ color: 'white' }} />
      <CardContent style={{ flexGrow: 1 }}>
        <Typography variant="body2" color="white">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions
        style={{
          justifyContent: 'center',
          marginBottom: 'auto',
          display: 'flex',
        }}
      >
        <Button
          variant="contained"
          sx={{
            borderRadius: '20px',
            background: '#ff6475',
            '&:hover': {
              background: '#ff6475',
            },
            color: 'black',
          }}
        >
          View all services
        </Button>
      </CardActions>
    </Card>
  )
}

export default TextCardComponent
