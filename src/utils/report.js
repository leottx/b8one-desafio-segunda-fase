import '@utils/summary';
import '@utils/ranking';
import '@utils/sales';

import { updateChartData, chartDataset } from '@utils/chartjs';
import { clearClasses } from '@utils/general';

const reportViews = ['sales', 'orders', 'resellers'];

const reportElement = document.getElementById('report-container');
const statsWrapperElement = document.getElementById('stats-wrapper');
const selectWrapperElement = document.getElementById('select-wrapper');
const rankingWrapperElement = document.getElementById('ranking-wrapper');
const viewBtnElements = document.querySelectorAll('.report__opt-btn');

const renderReportView = (viewId) => {
  clearClasses(
    [statsWrapperElement, selectWrapperElement, rankingWrapperElement],
    'show'
  );

  clearClasses(viewBtnElements, 'active');

  switch (viewId) {
    case reportViews[0]:
      updateChartData(chartDataset.sales);
      statsWrapperElement.classList.add('show');
      break;
    case reportViews[1]:
      updateChartData(chartDataset.orders);
      break;
    case reportViews[2]:
      updateChartData(chartDataset.resellers);
      rankingWrapperElement.classList.add('show');
      selectWrapperElement.classList.add('show');
    default:
      return;
  }
};

viewBtnElements.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    renderReportView(reportViews[index]);
    btn.classList.add('active');
  });
});

reportElement.dataset.view = reportViews[0];
