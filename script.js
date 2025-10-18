const form = document.querySelector('form');
const formSection = document.querySelector('.form-section');
const success = document.querySelector('.success');
const error = document.querySelector('.error');
const dismissButton = document.querySelector('.dismiss');

const input = document.querySelector('input');

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const toggle = () => {
  formSection.classList.toggle('hidden');
  success.classList.toggle('hidden');
  input.value = '';
};

input.addEventListener('input', () => {
  console.log(input.value);
  if (!emailRegex.test(input.value)) {
    input.classList.add('error');
    error.classList.remove('hidden');
  } else {
    input.classList.remove('error');
    error.classList.add('hidden');
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  toggle();
});

dismissButton.addEventListener('click', () => {
  toggle();
});
