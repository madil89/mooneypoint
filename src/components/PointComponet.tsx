import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import { Button, Typography } from '@mui/material';
import SouthIcon from '@mui/icons-material/South';
function PointComponet({details, isButton } : {details: string[], isButton: boolean}) {
  return (
    <div style={{ textAlign: 'left'}}>
      {details.map((detail, index) => (
        <div key={index} style={{ textAlign: 'left'}}>
          <StarIcon sx={{ background: 'white', borderRadius: 5, marginBottom: 1, marginTop: 1 }}/>
          <Typography color={'white'} sx={{ fontWeight: 'light'}}>{detail}</Typography>
        </div>
        
      ))}
      {
        isButton ? <Button variant='outlined' 
          sx={{ borderRadius: '20px', color: '#ff6476', width: '250px', marginTop: '20px', borderColor: '#ff6476'}}>
            Choose a found</Button> :
        <SouthIcon sx={{ color: 'white', fontSize: '30px', background: '#1f283d', borderRadius: 5, height: '50px' }} />
      }
      
    </div>
  )
}

export default PointComponet