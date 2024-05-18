import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

// Function to generate BPSK signal data
const generateBPSKData = (bitSequence) => {
  let currentTime = 0;
  const data = [];

  for (let i = 0; i < bitSequence.length; i++) {
    const phase = bitSequence[i] === "1" ? Math.PI : 0; // Phase shift for '1' bit

    // Add data points for the duration of the bit
    for (let j = 0; j < 100; j++) {
      const time = currentTime + j / 100;
      const value = Math.sin(2 * Math.PI * time + phase);
      data.push({ time: time.toFixed(2), value: value.toFixed(2) });
    }

    // Move to the next bit
    currentTime += 1;
  }

  return data;
};

// Bit sequence for BPSK modulation
const bitsSequence = "01010101";

// Generate BPSK data
const BPSKData = generateBPSKData(bitsSequence);

// BPSK signal component
export default function PSK() {
  return (
    <LineChart width={400} height={300} data={BPSKData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis type="number" domain={[-3, 3]} ticks={[ -3, 0, 3]} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} animationDuration={10000} />
    </LineChart>
  );
}