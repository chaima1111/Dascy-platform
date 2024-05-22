import React, { useState, useEffect } from 'react';
import './ProgressBar.css'; // Import CSS file for styling

const ProgressBar = () => {
  const [animationAngle, setAnimationAngle] = useState(0);

  useEffect(() => {
    const animationDuration = 1000;
    const delayDuration = 11000; 
    const startTime = Date.now() + delayDuration; // Calculate start time with delay

    const animationFrame = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;

      // Calculate progress as a value between 0 and 1
      const progress = elapsedTime / animationDuration;

      // Ensure animation stops after one full cycle
      if (progress >= 1) {
        setAnimationAngle(360); // Set final angle (360 degrees)
        return; // Exit animation loop
      }

      // Calculate angle for conic gradient (0 to 360 degrees)
      const newAngle = Math.floor(progress * 360);
      setAnimationAngle(newAngle);

      requestAnimationFrame(animationFrame);
    };

    // Start the animation loop after the delay
    const animationTimeout = setTimeout(() => {
      animationFrame();
    }, delayDuration);

    return () => {
      // Cleanup function
      clearTimeout(animationTimeout);
    };
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <div className="dascy_laws_progress" style={{ background: `conic-gradient(#AA2EE6 ${animationAngle}deg, #cfcfcf 0deg)` }}>
      <span className='dascy_laws_value'>1</span>
      <span className='dascy_laws_value2'>s</span> 
    </div>
  );
};

export default ProgressBar;

