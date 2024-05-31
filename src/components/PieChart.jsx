// src/components/PieChart.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import '../styles/PieChart.css'; // Importa el archivo CSS

const PieChart = ({ data }) => {
  // Verifica si hay datos de gastos disponibles
  const hasData = Array.isArray(data) && data.length > 0;

  // Datos predeterminados en caso de que no haya datos de gastos
  const defaultChartData = {
    labels: ['No hay datos'],
    datasets: [{
      data: [1],
      backgroundColor: ['#CCCCCC']
    }]
  };

  // Datos de la gráfica según los datos de gastos
  const chartData = hasData ? {
    labels: data.map(item => item.categoria),
    datasets: [{
      data: data.map(item => item.monto),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
    }]
  } : defaultChartData;

  // Opciones de configuración para Chart.js
  const options = {
    plugins: {
      legend: {
        labels: {
          color: 'white', // Color de la leyenda
          font: {
            size: 18 // Tamaño de la letra de la leyenda
          }
        }
      },
      title: {
        display: true,
        text: 'Gráfica de gastos',
        color: 'white',
        font: {
          size: 24 // Tamaño de la letra del título
        }
      }
    }
  };

  return (
    <div className="pie-chart-container">
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
