import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

// Fonction pour générer les données de modulation d'amplitude (ASK) pour la séquence de bits donnée
const generateASKData = (bitSequence) => {
  const data = [];
  let currentTime = 0;

  // Parcourir la séquence de bits
  for (let i = 0; i < bitSequence.length; i++) {
    const amplitude = bitSequence[i] === "1" ? 10 : 5;
    // Générer une onde sinusoïdale modulée en amplitude pour chaque bit
    for (let j = 0; j < 100; j++) { // 100 points par bit pour une courbe plus lisse
      const time = currentTime + j / 100; // Variation du temps pour chaque point
      const value = amplitude * Math.sin(2 * Math.PI * time); // Onde sinusoïdale modulée
      data.push({ time: time.toFixed(2), value: value.toFixed(2) });
    }
    currentTime += 1; // Incrémenter le temps pour le bit suivant
  }

  return data;
};

const bitSequence = "0110100";
const ASKData = generateASKData(bitSequence);



export default function ASK() {
  return (
    <LineChart width={400} height={300} data={ASKData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis datakey='time'/>
      <YAxis type="number" domain={[-20,20]} ticks={[-20 ,-15 ,-10,-5,0,5,10,15,20]}/>
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} animationDuration={10000}/>
    </LineChart>
  );
}