import eyeOne from '@images/icon-eye-on.svg';
import eyeOff from '@images/icon-eye-off.svg';

const B8ONE_DASH_KEY = 'b8one_dashboard_login';
const API_URL = 'https://test-final.b8one.academy/login';

const credential = JSON.parse(localStorage.getItem(B8ONE_DASH_KEY));

const formElement = document.getElementById('form-login');
const emailInputElement = document.getElementById('email-field');
const passwordInputElement = document.getElementById('password-field');
const checkboxElement = document.getElementById('checkbox');
const showPasswordElement = document.getElementById('show-password-btn');
const loginBtnElement = document.getElementById('login-btn');

const toggleSpinnerElement = () => {
  const spinnerElement = document.getElementById('anime-spinner');
  spinnerElement.classList.toggle('show');
};

const autoFillInputs = () => {
  emailInputElement.value = credential.email;
  passwordInputElement.value = credential.password;
};

const toggleDisableFormItens = () => {
  [
    emailInputElement,
    passwordInputElement,
    checkboxElement,
    showPasswordElement,
    loginBtnElement,
  ].forEach((elem) => {
    elem.disabled = !elem.disabled;
  });
};

const login = (email, password) => {
  return fetch(API_URL, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      toggleDisableFormItens();
      toggleSpinnerElement();

      if (data === true) {
        if (checkboxElement.checked) {
          localStorage.setItem(
            B8ONE_DASH_KEY,
            JSON.stringify({
              email: email,
              password: password,
            })
          );
        }
        window.location.href = 'https://google.com';
        return;
      }

      const { message } = data;

      showError(message);
    });
};

const showError = (message) => {
  const emailWarningElement = document.getElementById('email-warning');
  const passwordWarningElement = document.getElementById('password-warning');

  // Se o email estiver vazio
  if (
    message === 'email_is_required' &&
    emailWarningElement.textContent.length === 0
  ) {
    emailWarningElement.textContent = 'Por favor, insira um e-mail.';
    emailWarningElement.classList.add('show');
    return;
  }

  // Se a senha estiver vazia
  if (message === 'password_is_required') {
    passwordWarningElement.textContent = 'Por favor, insira uma senha válida.';
    passwordWarningElement.classList.add('show');
    return;
  }

  // Se um dos campos estiver errado
  if (message === 'user_not_found') {
    passwordWarningElement.textContent = 'E-mail ou senha inválidos.';
    passwordWarningElement.classList.add('show');
    return;
  }
};

// Subimissao do formulario
formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailVal = emailInputElement.value;
  const passwordVal = passwordInputElement.value;

  toggleDisableFormItens();
  toggleSpinnerElement();

  login(emailVal, passwordVal);
});

showPasswordElement.addEventListener('click', (e) => {
  e.preventDefault();

  if (passwordInputElement.type === 'password') {
    passwordInputElement.type = 'text';
    showPasswordElement.firstElementChild.src = eyeOne;
  } else {
    passwordInputElement.type = 'password';
    showPasswordElement.firstElementChild.src = eyeOff;
  }
});

// Login automatico
window.onload = () => {
  if (!credential) {
    return;
  }

  autoFillInputs();
  toggleDisableFormItens();
  toggleSpinnerElement();
  // login(credential.email, credential.password);
};
