// src/components/PieChart.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import '../styles/PieChart.css'; // Importa el archivo CSS

const PieChart = ({ data }) => {
  const chartData = {
    labels: Array.isArray(data) ? data.map(item => item.categoria) : [],
    datasets: [{
      data: Array.isArray(data) ? data.map(item => item.monto) : [],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
    }]
  };

  return (
    <div className="pie-chart-container">
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
