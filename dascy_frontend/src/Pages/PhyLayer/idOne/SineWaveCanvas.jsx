import React, { useRef, useEffect } from 'react';
import './SineWaveCanvas.css'; // Import the CSS file for styling

const SineWaveCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;  // Use the canvas's CSS width
    const height = canvas.height; // Use the canvas's CSS height
    const amplitude = 50; // Amplitude of the sine wave
    const frequency = 2 * Math.PI / width; // Frequency to fit one wave cycle in the canvas width

    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.moveTo(0, height / 2);

    for (let x = 0; x <= width; x++) {
      const y = height / 2 + amplitude * Math.sin(frequency * x);
      ctx.lineTo(x, y);
    }

    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
  }, []);

  return <canvas ref={canvasRef} className="dascy_laws_sine-wave-canvas" />;
};

export default SineWaveCanvas;






// import React, { useRef, useEffect } from 'react';

// const SineWaveCanvas = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     const width = canvas.width;
//     const height = canvas.height;
//     const amplitude = 50; // Amplitude of the sine wave
//     const frequency = 2 * Math.PI / width; // Frequency to fit one wave cycle in the canvas width

//     ctx.clearRect(0, 0, width, height);
//     ctx.beginPath();
//     ctx.moveTo(0, height / 2);

//     for (let x = 0; x <= width; x++) {
//       const y = height / 2 + amplitude * Math.sin(frequency * x);
//       ctx.lineTo(x, y);
//     }

//     ctx.strokeStyle = 'black';
//     ctx.lineWidth = 2;
//     ctx.stroke();
//   }, []);

//   return <canvas ref={canvasRef} width={800} height={400} />;
// };

// export default SineWaveCanvas;
