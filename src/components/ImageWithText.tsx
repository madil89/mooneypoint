import React from 'react'
import { useSpring, animated } from '@react-spring/web'

import './ImageWithText.css'
function ImageWithText({
  url,
  description,
}: {
  url: string
  description: string
}) {
  const styles = useSpring({
    from: { opacity: 0, transform: 'scale(0.6)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { duration: 2000 },
  })

  return (
    <animated.div style={styles}>
      <div className="container">
        <img
          src={url}
          alt="text"
          style={{ borderRadius: 35, width: '100%', maxHeight: '300px' }}
        />
        <div className="text-overlay">
          <p className="text">{description}</p>
        </div>
      </div>
    </animated.div>
  )
}

export default ImageWithText
