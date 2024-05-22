import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  scales,
} from 'chart.js';
import './AnalogDigitalCharts.css';
import annotationPlugin from 'chartjs-plugin-annotation';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
);

const AnalogDigitalCharts = () => {
  
  const analogData = {
    labels: Array.from({ length: 100 }, (_, i) => (i / 100).toFixed(2)), // 400 points for 4 seconds
    datasets: [
      {
        label: 'Analog Signal',
        data: Array.from({ length: 500 }, (_, i) => {
          const t = i / 100;
          if (t < 0.3) return Math.sin(8 * Math.PI * t); // First second wave
          if (t < 0.6) return Math.sin(10 * Math.PI * t); // Second second wave
          if (t < 3) return Math.sin(14 * Math.PI * t); // Third second wave
          return Math.sin(8 * Math.PI * t); // Fourth second wave
        }),
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 4,
        fill: false,
        tension: 0.1,
      },
    ],
  };
  const analogAnnotations = [
    {
      type: 'label',
      xScaleID: 'x',
      yScaleID: 'y',
      xValue: 45,
      yValue: -0.9,
      content: '00',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderColor: 'rgba(0, 0, 0, 0.4)',
      borderRadius: 50,
      color: '#fff',
      font: {
        size: 12,
      },
    },
    {
      type: 'label',
      xScaleID: 'x',
      yScaleID: 'y',
      xValue: 15,
      yValue: 1.3,
      content: '11',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderColor: 'rgba(0, 0, 0, 0.4)',
      borderRadius: 50,
      color: '#fff',
      font: {
        size: 12,
      },
    },
    
    {
      type: 'label',
      xScaleID: 'x',
      yScaleID: 'y',
      xValue: 75,
      yValue: -1.4,
      content: '01',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderColor: 'rgba(0, 0, 0, 0.4)',
      borderRadius: 50,
      color: '#fff',
      font: {
        size: 12,
      },
    },

  
  ];

    const digitalData = {
      labels: Array.from({ length: 8 }, (_, i) => (i / 2).toFixed(2)), // 8 points for 4 seconds
      datasets: [
        {
          label: 'Digital Signal',
          data: [0, 1, 1, -2, 0, -1, -1, 0], // Steps for each half-second
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 2,
          fill: false,
          stepped: true,
        },
      ],
    };
    const digitalAnnotations = [
      {
        type: 'label',
        xScaleID: 'x',
        yScaleID: 'y',
        xValue: 0.5,
        yValue: 0,
        content: '00',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderColor: 'rgba(0, 0, 0, 0.4)',
      borderRadius: 50,
        color: '#fff',
        font: {
          size: 12,
        },
      },
      {
        type: 'label',
        xScaleID: 'x',
        yScaleID: 'y',
        xValue: 1.5,
        yValue: 1,
        content: '11',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: 50,
        color: '#fff',
        font: {
          size: 12,
        },
        
      },
      {
        type: 'label',
        xScaleID: 'x',
        yScaleID: 'y',
        xValue: 2.5,
        yValue: 1,
        content: '11',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderColor: 'rgba(0, 0, 0, 0.4)',
      borderRadius: 50,
        color: '#fff',
        font: {
          size: 12,
        },
      },
      
      {
        type: 'label',
        xScaleID: 'x',
        yScaleID: 'y',
        xValue: 5.5,
        yValue: -1,
        content: '01',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderColor: 'rgba(0, 0, 0, 0.4)',
      borderRadius: 50,
        color: '#fff',
        font: {
          size: 12,
        },
      },
      {
        type: 'label',
        xScaleID: 'x',
        yScaleID: 'y',
        xValue: 6.5,
        yValue: -1,
        content: '01',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderColor: 'rgba(0, 0, 0, 0.4)',
      borderRadius: 50,
        color: '#fff',
        font: {
          size: 12,
        },
      },
      {
        type: 'label',
        xScaleID: 'x',
        yScaleID: 'y',
        xValue: 3.5,
        yValue: -2,
        content: '10',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderColor: 'rgba(0, 0, 0, 0.4)',
      borderRadius: 50,
        color: '#fff',
        font: {
          size: 12,
        },
      },
      {
        type: 'label',
        xScaleID: 'x',
        yScaleID: 'y',
        xValue: 4.5,
        yValue: 0,
        content: '00',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderColor: 'rgba(0, 0, 0, 0.4)',
      borderRadius: 50,
        color: '#fff',
        font: {
          size: 12,
        },
      },
    ];

  const commonOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: false,  // Disable tooltips
      },
      legend: {
        display: false,  // Hide the legend
      },
    },
    scales: {
      x: {
        grid: {
          display: false // Hide the vertical grid lines
        },
        title: {
          display: true,
          text: 'Time (s)',
        },
      },
      y: {
        display: false,
        title: {
          display: false,
          text: 'Value',
        },
        min: -3,
        max: 3,
      },
    },
  };
  
  const digitalOptions = {
    ...commonOptions,
    plugins: {
      ...commonOptions.plugins,
      annotation: {
        annotations: digitalAnnotations,
      },
    },
    scales:{...commonOptions.scales,
      x: {
        ...commonOptions.x,
        ticks: {
          callback: function(value,index, values) {
            return parseFloat(this.getLabelForValue(value)).toFixed(1);
          },
        },
      }, 
    },
  };
  const analogOptions = {
    ...commonOptions,
    plugins: {
      ...commonOptions.plugins,
      annotation: {
        annotations: analogAnnotations,
      },
      },
      scales:{...commonOptions.scales,
        x: {
          ...commonOptions.x,
          ticks: {
            callback: function(value,index, values) {
            if (index % 32 === 0 || index === values.length - 1) {
              return parseFloat(this.getLabelForValue(value)).toFixed(1);
            } else {
              return '';}
            },
          },
        }, 
      },
         
  };
  return (
    <div className="dascy_laws_container">
      <div className="dascy_laws_chart-wrapper1">
        <h2 className="dascy_laws_chart-title1">b. Analog Signal</h2>
        <div className="dascy_laws_chart-container">
          <Line data={analogData} options={analogOptions} />
        </div>
      </div>
      <div className="dascy_laws_chart-wrapper2">
        <h2 className="dascy_laws_chart-title2">a. Digital Signal</h2>
        <div className="dascy_laws_chart-container">
          <Line data={digitalData} options={digitalOptions} />
        </div>
      </div>
    </div>
  );
};

export default AnalogDigitalCharts;
