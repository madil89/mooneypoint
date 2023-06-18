import React from 'react'
import { useSpring, animated } from '@react-spring/web'

function ImageComponent() {
  const springProps = useSpring({
    from: { height: '0%' },
    to: { height: '100%' },
    config: { duration: 5000 },
  })

  return (
    <div>
      <animated.div style={{ overflow: 'hidden' }}>
        <animated.img
          src="/assets/image1.jpeg"
          alt="Your"
          style={{ ...springProps, borderRadius: '35px' }}
        />
      </animated.div>
    </div>
  )
}

export default ImageComponent
