import React, { useEffect, useRef } from 'react';
import './UncoverImage.css'; // Replace with your CSS file

function UncoverImage({ url } : {url: string}) {
  const imageRef = useRef(null);

  useEffect(() => {
    const currentImageRef = imageRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('uncover');
        }
      },
      {
        threshold: 0.1, // Adjust threshold as needed
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (currentImageRef) {
        observer.unobserve(currentImageRef);
      }
    };
  }, []);

  return (
    <div style={{ display: 'flex', width: '100%', padding: '0px', justifyContent: 'center'}}>
      <div className="image-container" style={{ width: '150px', height: '300px', textAlign: 'center' }}>
        <img
          ref={imageRef}
          src={url}
          alt="Your"
          className="uncover-image"
          style={{ borderRadius: '60px'}}
        />
      </div>
    </div>
    
    
  );
}

export default UncoverImage;