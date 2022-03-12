import { clearClasses } from '@utils/general';

const summaryBtnElements = document.querySelectorAll('.summary__opt-btn');

summaryBtnElements.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    clearClasses(summaryBtnElements, 'active');
    btn.classList.add('active');
  });
});
