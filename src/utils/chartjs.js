import Chart from 'chart.js/auto';

export const chartDataset = {
  sales: [
    {
      pointRadius: 0,
      borderColor: '#425DC7',
      borderWidth: 2,
      data: [0, 40, 25, 30, 75, 45, 45],
    },
    {
      pointRadius: 0,
      borderColor: '#F03460',
      borderWidth: 2,
      data: [0, 70, 40, 75, 5, 95, 120],
    },
    {
      pointRadius: 0,
      borderColor: '#FFBE00',
      borderWidth: 2,
      data: [0, 5, 45, 160, 45, 75, 200],
    },
    {
      pointRadius: 0,
      borderColor: '#158F2E',
      borderWidth: 2,
      data: [0, 110, 65, 130, 90, 190, 200],
    },
  ],
  orders: [
    {
      pointRadius: 0,
      borderColor: '#425DC7',
      borderWidth: 2,
      data: [0, 75, 75, 125, 45, 160, 160],
    },
  ],
  resellers: [
    {
      pointRadius: 0,
      borderColor: '#425DC7',
      borderWidth: 2,
      data: [0, 30, 15, 55, 15, 30, 110],
    },
    {
      pointRadius: 0,
      borderColor: '#F03460',
      borderWidth: 2,
      data: [0, 10, 5, 5, 45, 5, 48],
    },
    {
      pointRadius: 0,
      borderColor: '#158F2E',
      borderWidth: 2,
      data: [0, 45, 65, 110, 60, 80, 65],
    },
  ],
};

const chartArea = document.getElementById('report-chart');

const reportChart = buildChart(chartDataset.sales);

export const updateChartData = (data) => {
  reportChart.data.datasets = data;
  reportChart.update();
};

export function buildChart(chartData) {
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
    datasets: chartData,
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

  return new Chart(chartArea, config);
}
