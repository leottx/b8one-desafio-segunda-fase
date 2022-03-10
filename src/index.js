// Estilos dos componentes da aplicacao
import '@styles/styles.css';

// Chart js
import { buildChart } from '@utils/chartjs';

const dataSet = [
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
];

// const dataSet = [
//   {
//     pointRadius: 0,
//     borderColor: '#425DC7',
//     borderWidth: 2,
//     data: [0, 75, 75, 125, 45, 160, 160],
//   },
// ];

// const dataSet = [
//   {
//     pointRadius: 0,
//     borderColor: '#425DC7',
//     borderWidth: 2,
//     data: [0, 30, 15, 55, 15, 30, 110],
//   },
//   {
//     pointRadius: 0,
//     borderColor: '#F03460',
//     borderWidth: 2,
//     data: [0, 10, 5, 5, 45, 5, 48],
//   },
//   {
//     pointRadius: 0,
//     borderColor: '#158F2E',
//     borderWidth: 2,
//     data: [0, 45, 65, 110, 60, 80, 65],
//   },
// ];

buildChart(dataSet);
