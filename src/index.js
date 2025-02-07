import './styles/index.css';

import { getDatesArray } from './components/counter';
import { nonWorkingDays, string } from './components/variables';
import { createRow } from './components/list';

const form = document.querySelector('.page__form');
const dateInput = form.querySelector('.page__form-input');
const buttonSubmit = form.querySelector('.page__form-button');
const buttonReset = form.querySelector('.page__form-reset');
const list = document.querySelector('.list');
const wrapper = form.querySelector('.page__form-wrapper');

const handleButtonSubmit = (evt) => {
  evt.preventDefault();
  const userDay = new Date(dateInput.value).toLocaleDateString().split('.').reverse().join('.');
  const arr = getDatesArray(new Date(userDay), nonWorkingDays);
 
  for(let i=0; i < string; i++) {
    list.append(createRow(arr[i], arr[i+9], arr[i+10]));
  }
  list.classList.add('list_visible');
  wrapper.style.display = 'none';
  buttonSubmit.style.display = 'none';
  setTimeout(() => {buttonReset.style.display = 'block'}, 60000);
};

const clearList = () => {
  const listItems = Array.from(document.querySelectorAll('.list__item'));
  listItems.forEach((item) => {
    list.removeChild(item);
  });
};

const handleButtonReset = (evt) => {
  evt.preventDefault();
  dateInput.value = ''
  clearList();
  list.classList.remove('list_visible');
  wrapper.style.display = 'block';
  buttonSubmit.style.display = 'block';
};

form.addEventListener('submit', handleButtonSubmit);
form.addEventListener('reset', handleButtonReset);