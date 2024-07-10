import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const AttendanceChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient1.addColorStop(0, 'rgba(4, 162, 235, 0.8)');
    gradient1.addColorStop(1, 'rgba(4, 162, 235, 0.2)');

    const gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient2.addColorStop(0, 'rgba(255, 99, 132, 0.8)');
    gradient2.addColorStop(1, 'rgba(255, 99, 132, 0.2)');

    const gradient3 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient3.addColorStop(0, 'rgba(75, 192, 192, 0.8)');
    gradient3.addColorStop(1, 'rgba(75, 192, 192, 0.2)');

    const gradient4 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient4.addColorStop(0, 'rgba(153, 102, 255, 0.8)');
    gradient4.addColorStop(1, 'rgba(153, 102, 255, 0.2)');

    const hrisChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Employees',
            backgroundColor: gradient1,
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            data: [0, 4.5, 5.1, 3, 1.5, 2.1, 2.9, 2.5, 2.2, 3, 4.5, 0],
            fill: true,
            lineTension: 0.4,
            cubicInterpolationMode: 'monotone',
            pointRadius: 0, // Remove points
            pointHoverRadius: 0, // Remove points on hover
          },
          // {
          //   label: 'Tardies',
          //   backgroundColor: gradient2,
          //   borderColor: 'rgba(255, 99, 132, 1)',
          //   borderWidth: 2,
          //   data: [5, 4, 6, 3, 7, 5, 4, 6, 3, 5, 4, 7],
          //   fill: true,
          //   lineTension: 0.4,
          //   cubicInterpolationMode: 'monotone',
          //   pointRadius: 0,
          //   pointHoverRadius: 0,
          // },
          // {
          //   label: 'Official Business',
          //   backgroundColor: gradient3,
          //   borderColor: 'rgba(75, 192, 192, 1)',
          //   borderWidth: 2,
          //   data: [8, 9, 7, 10, 6, 8, 9, 7, 10, 8, 9, 6],
          //   fill: true,
          //   lineTension: 0.4,
          //   cubicInterpolationMode: 'monotone',
          //   pointRadius: 0,
          //   pointHoverRadius: 0,
          // },
          // {
          //   label: 'Others',
          //   backgroundColor: gradient4,
          //   borderColor: 'rgba(153, 102, 255, 1)',
          //   borderWidth: 2,
          //   data: [10, 12, 8, 14, 9, 10, 12, 8, 14, 10, 12, 9],
          //   fill: true,
          //   lineTension: 0.4,
          //   cubicInterpolationMode: 'monotone',
          //   pointRadius: 0,
          //   pointHoverRadius: 0,
          // },
        ],
      },
      options: {
        animation: {
          duration: 2000,
          easing: 'easeInOutQuart',
        },
        scales: {
          y: {
            beginAtZero: true,
            min: 0,
            max: 10,
            ticks: {
              callback: function(value) {
                if (value === 0 || value === 1 || value === 2 || value === 3 || value === 4 || value === 5 || value === 10) {
                  return value;
                }
              },
            },
          },
        },
      },
    });

    return () => {
      hrisChart.destroy();
    };
  }, []);

  return <canvas id="attendanceChart" ref={chartRef} />;
};

export default AttendanceChart;
