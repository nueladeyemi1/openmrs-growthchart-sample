import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  //   Tooltip,
  //   Legend,
} from 'chart.js';

// Register required Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title);

const GrowthChart = () => {
  const [growthData, setGrowthData] = useState([]);

  // Sample data for testing
  useEffect(() => {
    const sampleGrowthData = [
      { date: '2023-01-01', value: 50 },
      { date: '2023-02-01', value: 52 },
      { date: '2023-03-01', value: 54 },
      { date: '2023-04-01', value: 56 },
      { date: '2023-05-01', value: 58 },
      { date: '2023-06-01', value: 60 },
      { date: '2023-07-01', value: 62 },
      { date: '2023-08-01', value: 64 },
      { date: '2023-09-01', value: 66 },
    ];
    setGrowthData(sampleGrowthData);
  }, []);

  const chartData = {
    labels: growthData.map((data) => new Date(data.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Height (cm)',
        data: growthData.map((data) => data.value),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Line data={chartData} />
    </div>
  );
};

export default GrowthChart;
