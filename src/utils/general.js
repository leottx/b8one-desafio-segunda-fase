export const fetchData = async (route) => {
  const BASE__URL = 'https://test-final.b8one.academy/';

  const response = await fetch(`${BASE__URL}${route}`);
  const data = await response.json();

  return data;
};

export const getFirstTwoLetters = (string) => {
  const firstTwoLetters = string
    .split(' ')
    .map((word) => word[0])
    .join('')
    .substring(0, 2);

  return firstTwoLetters;
};

export const formatCurrency = (value) => {
  return (value / 100).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
};

export const clearClasses = (elements, classe) => {
  for (const element of elements) {
    element.classList.remove(classe);
  }
};
