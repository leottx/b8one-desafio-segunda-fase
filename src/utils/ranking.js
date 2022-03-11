import { fetchData } from '@utils/general';
import { getFirstTwoLetters } from '@utils/general';

const populateRankingList = async () => {
  let { resellers } = await fetchData('resellers/ranking');

  const rankingListElement = document.getElementById('ranking-list');

  resellers = resellers
    .map((reseller, index) => {
      const { name, ordersCount, percentage } = reseller;

      const isValuePositive = percentage
        .split('')
        .find((element) => element === '+');

      return `
    <li class="report__seler">
      <span class="report__seler-index">${index + 1}°</span>
      <figure class="report__seler-pic-wrapper">
        <figcaption class="report__seler-init">${getFirstTwoLetters(
          name
        )}</figcaption>
      </figure>
      <div class="report__seler-wrapper">
        <p class="report__seler-name">${name}</p>
        <div class="report__order-wrapper">
          <span class="report__order-amount">${ordersCount} pedidos</span>
          <span class="${
            isValuePositive
              ? 'report__order-stats'
              : 'report__order-stats negative'
          }">

          ${percentage.substring(1)}

          ${
            isValuePositive
              ? `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.9998 9.5L7.99976 6.5L4.99976 9.5" stroke="#158F2E" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round" />
        </svg>`
              : `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.00024 6.5L8.00024 9.5L11.0002 6.5" stroke="#EB0045" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
          }
          </span>
        </div>
      </div>
    </li>
    `;
    })
    .join('');

  rankingListElement.innerHTML = resellers;
};

populateRankingList();
