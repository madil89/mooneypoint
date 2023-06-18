import React from 'react'
import './ImageWithText.css';
function ImageWithText({url, description } : {url: string, description: string}) {
  return (
    <div className='container'>
      <img src={url} alt='text' style={{ borderRadius: 35, width: '100%', maxHeight: '300px'}}/>
      <div className="text-overlay">
        <p className="text">{description}</p>
      </div>
    </div>
  )
}

export default ImageWithText