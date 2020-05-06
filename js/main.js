const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

// day 1

 const buttonAuth = document.querySelector('.button-auth');
 const modalAuth = document.querySelector('.modal-auth');
 const buttonCloseAuth = document.querySelector('.close-auth');
 const loginInForm = document.querySelector('#logInForm');
 const loginInput = document.querySelector('#login');
 const userName = document.querySelector('.user-name');
 const buttonOut = document.querySelector('.button-out');

 let login = localStorage.getItem('delivery');

 // функция для появления модального окна

 function toggleModalAuth() {
  modalAuth.classList.toggle('is-open');
 }

 // функция авторизации

 function autorazied() {

  function logOut() {
    login = null;
    localStorage.removeItem('delivery');
    buttonAuth.style.display = '';
    userName.style.display = '';
    buttonOut.style.display = '';
    buttonOut.removeEventListener('click', logOut);
    checkAuth();
  }

   console.log('Авто');
   userName.textContent = login;
   buttonAuth.style.display = 'none';
   userName.style.display = 'inLine';
   buttonOut.style.display = 'block';

   buttonOut.addEventListener('click', logOut);
 }

 function notAutorazied() {
  console.log('Не авторизован');

  function LogIn(event) {
    event.preventDefault();
    login = loginInput.value;
    localStorage.setItem('delivery', login);

    toggleModalAuth();
    buttonAuth.removeEventListener('click', toggleModalAuth);
    buttonCloseAuth.removeEventListener('click', toggleModalAuth);
    loginInForm.removeEventListener('submit', LogIn);
    loginInForm.reset();
    checkAuth();
  }

  buttonAuth.addEventListener('click', toggleModalAuth);
  buttonCloseAuth.addEventListener('click', toggleModalAuth);
  loginInForm.addEventListener('submit', LogIn);
 }

 function checkAuth() {
  if (login) {
    autorazied();
  } else {
    notAutorazied();
  }
 }

 checkAuth();

