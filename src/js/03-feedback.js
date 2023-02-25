import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const formData = {};

populateForm()
form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function populateForm() {
  const savedInputForm = JSON.parse(localStorage.getItem('feedback-form-state'));
  
  if (savedInputForm) {
    input.value = savedInputForm.email;
    textarea.value = savedInputForm.message;
  }
}
