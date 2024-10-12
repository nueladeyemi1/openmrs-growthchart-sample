import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { useGrowthData } from '../api/setup';

ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

interface GrowthChartProps {
  patientId: string; // This should be a valid UUID of a patient
  growthCode: string; // e.g., LOINC code for height
}

const FetchedGrowthChart: React.FC<GrowthChartProps> = ({ patientId, growthCode }) => {
  const { growthData, error, isLoading } = useGrowthData(patientId, growthCode);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching growth data</div>;

  // Prepare data for the chart
  const labels = growthData.map((observation) => observation.effectiveDateTime); // or observation.issued if available
  const values = growthData.map((observation) => observation.valueQuantity.value);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Growth Data',
        data: values,
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  return (
    <div>
      <h2>Growth Chart</h2>
      <Line data={data} />
    </div>
  );
};

export default FetchedGrowthChart;
