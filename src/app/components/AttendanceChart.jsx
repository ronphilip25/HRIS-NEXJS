import React, { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const AttendanceChart = () => {
  const chartRef = useRef(null);
  const [timePeriod, setTimePeriod] = useState('12months');

  const getDataForTimePeriod = (period) => {
    switch (period) {
      case '30days':
        return {
          labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
          employees: Array.from({ length: 30 }, () => Math.random() * 5),
          tardies: Array.from({ length: 30 }, () => Math.random() * 5),
          others: Array.from({ length: 30 }, () => Math.random() * 5),
        };
      case '7days':
        return {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          employees: Array.from({ length: 7 }, () => Math.random() * 5),
          tardies: Array.from({ length: 7 }, () => Math.random() * 5),
          others: Array.from({ length: 7 }, () => Math.random() * 5),
        };
      case '24hrs':
        return {
          labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
          employees: Array.from({ length: 24 }, () => Math.random() * 5),
          tardies: Array.from({ length: 24 }, () => Math.random() * 5),
          others: Array.from({ length: 24 }, () => Math.random() * 5),
        };
      default:
        return {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
          employees: [0, 1, 1.5, 3.1, 4, 4.5, 3, 5, 4, 3, 4, 5],
          tardies: [3, 4, 3, 5, 2, 1, 3.5, 4.5, 2.5, 4, 3, 4],
          others: [3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4],
        };
    }
  };

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient1.addColorStop(0, 'rgba(4, 162, 235, 0.8)');
    gradient1.addColorStop(1, 'rgba(4, 162, 235, 0.1)');

    const gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient2.addColorStop(0, 'rgba(255, 99, 132, 0.8)');
    gradient2.addColorStop(1, 'rgba(255, 99, 132, 0.2)');

    const gradient3 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient3.addColorStop(0, 'rgba(153, 102, 255, 0.8)');
    gradient3.addColorStop(1, 'rgba(153, 102, 255, 0.2)');

    const updateChart = () => {
      const { labels, employees, tardies, others } = getDataForTimePeriod(timePeriod);

      hrisChart.data.labels = labels;
      hrisChart.data.datasets[0].data = employees;
      hrisChart.data.datasets[1].data = tardies;
      hrisChart.data.datasets[2].data = others;
      hrisChart.update();
    };

    const hrisChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Employees',
            backgroundColor: gradient1,
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            data: [],
            fill: true,
            lineTension: 0.4,
            cubicInterpolationMode: 'monotone',
            pointRadius: 0,
            pointHoverRadius: 0,
          },
          {
            label: 'Tardies',
            backgroundColor: gradient2,
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            data: [],
            fill: true,
            lineTension: 0.4,
            cubicInterpolationMode: 'monotone',
            pointRadius: 0,
            pointHoverRadius: 0,
          },
          {
            label: 'Others',
            backgroundColor: gradient3,
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 2,
            data: [],
            fill: true,
            lineTension: 0.4,
            cubicInterpolationMode: 'monotone',
            pointRadius: 0,
            pointHoverRadius: 0,
          },
        ],
      },
      options: {
        animation: {
          duration: 2000,
          easing: 'easeInOutQuart',
        },
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            min: 0,
            max: 10,
            ticks: {
              callback: function (value) {
                if (value === 0 || value === 1 || value === 2 || value === 3 || value === 4 || value === 5 || value === 10) {
                  return value;
                }
              },
            },
          },
          x: {
            grid: {
              color: 'rgba(0, 0, 0, 0.1)', // Gridline color
              borderDash: [5, 5], // Dashed gridline pattern
              borderColor: 'rgba(0, 0, 0, 1)', // Axis border color
              borderWidth: 19, // Axis border width
            },
          },
        },
      },
    });

    updateChart();

    return () => {
      hrisChart.destroy();
    };
  }, [timePeriod]);

  return (
    <div>
      <div>
      <button className={`p-1   lg:max-[1440px]:text-xs border-2 text-xs md:text-xs px-3 lg:text-sm font-normal lg:border-2 lg:border-r-0 rounded-l-md ${timePeriod === '12months' ? 'text-black' : 'text-blue-200'}`} onClick={() => setTimePeriod('12months')}>12 Months</button>
        <button className={`p-1 lg:max-[1440px]:text-xs border-2 border-l-0 border-r-0 text-xs md:text-xs px-3 lg:text-sm font-normal lg:border-2 lg:border-r-0 ${timePeriod === '30days' ? 'text-black' : 'text-blue-200'}`} onClick={() => setTimePeriod('30days')}>30 Days</button>
        <button className={`p-1 lg:max-[1440px]:text-xs border-2 border-r-0 text-xs md:text-xs px-3 lg:text-sm font-normal lg:border-2 lg:border-r-0 ${timePeriod === '7days' ? 'text-black' : 'text-blue-200'}`} onClick={() => setTimePeriod('7days')}>7 Days</button>
        <button className={`p-1 lg:max-[1440px]:text-xs border-2 text-xs rounded-r-md md:text-xs px-3 lg:text-sm font-normal lg:border-2 lg:rounded-r-md ${timePeriod === '24hrs' ? 'text-black' : 'text-blue-200'}`} onClick={() => setTimePeriod('24hrs')}>24 Hours</button>
      </div>
      <canvas className='mt-3' height={120} id="attendanceChart" ref={chartRef} />
    </div>
  );
};

export default AttendanceChart;
