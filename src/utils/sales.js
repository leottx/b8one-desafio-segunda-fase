import { fetchData } from '@utils/general';
import { formatCurrency } from '@utils/general';

const populateSalesStats = async () => {
  let { revenues, totalSales, averageTicket } = await fetchData('sales');

  const statsListElement = document.getElementById('stats-list');

  statsListElement.innerHTML = `
    <li class="report__amount">
      <div class="icon-wrapper">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 28.3333C22.3638 28.3333 28.3334 22.3638 28.3334 15C28.3334 7.63616 22.3638 1.66663 15 1.66663C7.63622 1.66663 1.66669 7.63616 1.66669 15C1.66669 22.3638 7.63622 28.3333 15 28.3333Z"
            fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
          <path
            d="M19 9.66663H13.8889C12.2933 9.66663 11 10.8605 11 12.3333C11 13.8061 12.2933 15 13.8889 15H16.1111C17.7067 15 19 16.1938 19 17.6666C19 19.1394 17.7067 20.3333 16.1111 20.3333H11"
            stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M15 7V9.66667" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M15 20.3334L15 23" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </div>
      <div class="report__amount-inner-wrapper">
        <span class="report__amount-type">Faturamento</span>
        <p class="report__amount-value">${formatCurrency(revenues)}</p>
      </div>
    </li>
    <li class="report__amount">
      <div class="icon-wrapper">
        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.83333 1L1 5.8V22.6C1 23.2365 1.26925 23.847 1.7485 24.2971C2.22776 24.7471 2.87778 25 3.55556 25H21.4444C22.1222 25 22.7722 24.7471 23.2515 24.2971C23.7308 23.847 24 23.2365 24 22.6V5.8L20.1667 1H4.83333Z"
            fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M1 5.80017H24" stroke="white" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
          <path
            d="M17.6115 10.5999C17.6115 11.8738 17.073 13.0957 16.1145 13.9965C15.1559 14.8974 13.8559 15.4035 12.5004 15.4035C11.1448 15.4035 9.84478 14.8974 8.88626 13.9965C7.92774 13.0957 7.38925 11.8738 7.38925 10.5999"
            stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div class="report__amount-inner-wrapper">
        <span class="report__amount-type">Vendas totais</span>
        <p class="report__amount-value">${totalSales}</p>
      </div>
    </li>
    <li class="report__amount">
      <div class="icon-wrapper">
        <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M26.8577 17.5374L16.8846 27.5105C16.6262 27.7691 16.3194 27.9743 15.9817 28.1143C15.644 28.2543 15.282 28.3264 14.9164 28.3264C14.5508 28.3264 14.1888 28.2543 13.8511 28.1143C13.5134 27.9743 13.2066 27.7691 12.9482 27.5105L1.58658 16.1621C1.211 15.7869 0.999969 15.2779 0.999969 14.747V3.66666C0.999969 2.56209 1.8954 1.66666 2.99997 1.66666H14.081C14.6114 1.66666 15.1202 1.87737 15.4952 2.25244L26.8577 13.6149C27.3758 14.1361 27.6666 14.8412 27.6666 15.5761C27.6666 16.3111 27.3758 17.0161 26.8577 17.5374Z"
            fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M8.99997 9.66666H9.0133" stroke="#425DC7" stroke-width="4" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </div>
      <div class="report__amount-inner-wrapper">
        <span class="report__amount-type">Ticket médio</span>
        <p class="report__amount-value">${formatCurrency(averageTicket)}</p>
      </div>
    </li>
  `;
};

populateSalesStats();
