const getFirstTwoLetters = (string) => {
  const firstTwoLetters = string
    .split(' ')
    .map((word) => word[0])
    .join('')
    .substring(0, 2);

  return firstTwoLetters;
};

const fetchHeaderData = async () => {
  const BASE__URL = 'https://test-final.b8one.academy/';

  const response = await fetch(`${BASE__URL}user`);
  const data = await response.json();

  return data;
};

const populateHeader = async () => {
  const { username, organization, photo } = await fetchHeaderData();
  const companyWrapperElement = document.getElementById('company-wrapper');
  const usernameBtnElement = document.getElementById('username-btn');

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

window.onload = () => populateHeader();
