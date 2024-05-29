// PieChart.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const PieChart = ({ data }) => {
  // Verifica si data es un arreglo, si no lo es, asigna un arreglo vacío
  const chartData = {
    labels: Array.isArray(data) ? data.map(item => item.categoria) : [],
    datasets: [{
      data: Array.isArray(data) ? data.map(item => item.monto) : [],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
    }]
  };

  return <Pie data={chartData} />;
};

export default PieChart;

