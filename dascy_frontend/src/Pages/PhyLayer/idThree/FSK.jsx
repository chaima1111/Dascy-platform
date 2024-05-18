import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";


// Fonction pour créer les données de modulation en fréquence FSK
const generateFSKData = (bitSequence) => {
  let currentTime = 0;
  const data = [];

  for (let i = 0; i < bitSequence.length; i++) {
    const frequency = bitSequence[i] === "1" ? 2 : 1;

    // Ajouter une seule période sinusoidale pour chaque bit
    for (let j = 0; j < 100; j++) {
      const time = currentTime + j/100;
      const value = 5*Math.sin( 2*Math.PI * frequency * time);
      data.push({ time: time.toFixed(2), value: value.toFixed(2) });
    }

    // Mettre à jour le temps actuel pour le prochain bit
    currentTime += 1;
  }

  return data;
};

// Séquence de bits à moduler
const bitsSequence = "0110100";

const FSKData = generateFSKData(bitsSequence);

export default function FSK() {
  return (
    <LineChart width={400} height={300} data={FSKData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={'time'}  />
      <YAxis type="number" domain={[-10, 10]} ticks={[-10, -5, 0, 5, 10]} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} animationDuration={10000} />
    </LineChart>
  );
}