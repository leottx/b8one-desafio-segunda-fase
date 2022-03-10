import Chart from 'chart.js/auto';

export const buildChart = (dataSets) => {
  const labels = [
    '06/10',
    '07/10',
    '08/10',
    '09/10',
    '10/10',
    '11/10',
    '12/10',
  ];

  const data = {
    labels: labels,
    datasets: dataSets,
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      scales: {
        x: {
          grid: {
            drawBorder: false,
            drawOnChartArea: false,
            display: true,
            lineWidth: 0,
          },
        },
        y: {
          max: 200,
          min: 0,
          ticks: {
            stepSize: 50,
          },
        },
      },
      reponsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  };

  new Chart(document.getElementById('report-chart'), config);
};
