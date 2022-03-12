import { getFirstTwoLetters, fetchData } from '@utils/general';

const burguerBtnElement = document.getElementById('burguer');
const asideElement = document.getElementById('aside');
const usernameBtnElement = document.getElementById('username-btn');
const dropdowElements = document.querySelectorAll('.header__action-dropdown');
let actionBtnElements = document.querySelectorAll('.header__action-btn');

actionBtnElements = [...actionBtnElements, usernameBtnElement];

actionBtnElements.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    dropdowElements[index].classList.toggle('show');
  });
});

// toggle do menu hamburguer
burguerBtnElement.addEventListener('click', (e) => {
  e.preventDefault();
  asideElement.classList.toggle('show');
});

const populateHeader = async () => {
  const { username, organization, photo } = await fetchData('user');
  const companyWrapperElement = document.getElementById('company-wrapper');

  companyWrapperElement.innerHTML = `
  <figure class="header__company-avatar-wrapper">
    <figcaption class="header__company-caption">${getFirstTwoLetters(
      organization
    )}</figcaption>
    </figure>
  <p class="header__company-name">${organization}</p>
  `;

  usernameBtnElement.innerHTML = `
    <img class="header__user-avatar" src=${photo} alt="Botão do usuário" />
    <span class="header__username">${username}</span>
  `;
};

populateHeader();
