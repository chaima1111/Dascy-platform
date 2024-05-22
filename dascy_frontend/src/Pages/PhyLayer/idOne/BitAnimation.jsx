import React, { useState, useEffect } from 'react';
import './BitAnimation.css'; // Import CSS file for styling

const BitAnimation = () => {
  const [bits, setBits] = useState([1, 0, 0, 1, 1,0,1]); // Initial bit sequence

  useEffect(() => {
    // Function to shift bits to the left every second
    const interval = setInterval(() => {
      // Get current bits and perform left shift
      const lastBit = bits[bits.length - 1];
      const shiftedBits = [lastBit, ...bits.slice(0, bits.length - 1)];
      setBits(shiftedBits);
    }, 200);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [bits]); // Re-run effect when 'bits' state changes

  return (
    <div className="dascy_laws_bit-animation">
      {bits.map((bit, index) => (
        <div key={index} className="dascy_laws_bit">{bit}</div>
      ))}
    </div>
  );
};

export default BitAnimation;

