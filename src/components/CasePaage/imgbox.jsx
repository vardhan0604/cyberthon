import React, { useState } from 'react';
import fir from "../../img/fir.jpg";

const ImageComponent = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreenClick = () => {
    const element = document.querySelector('.fixed-size-fir');

    if (element) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
        setIsFullScreen(false);
      } else {
        element.requestFullscreen().catch((err) => {
          console.error('Error attempting to enable full-screen mode:', err);
        });
        setIsFullScreen(true);
      }
    }
  }

  return (
    <div className="fir-container">
      <img
        className="fixed-size-fir"
        src={fir}
        alt="Sample Image"
      />
      <button onClick={handleFullScreenClick}>
        {'Full Screen'}
      </button>
    </div>
  );
}

export default ImageComponent;
