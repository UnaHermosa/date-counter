import './styles/index.css';

import { getDatesArray } from './components/counter';
import { nonWorkingDays, string } from './components/variables';
import { createRow } from './components/list';

const form = document.querySelector('.page__form');
const dateInput = form.querySelector('.page__form-input');
const buttonSubmit = form.querySelector('.page__form-button');
const list = document.querySelector('.list');

const handleButtonSubmit = (evt) => {
  evt.preventDefault();
  const userDay = new Date(dateInput.value).toLocaleDateString().split('.').reverse().join('.');
  const arr = getDatesArray(new Date(userDay), nonWorkingDays);
  console.log(arr);
 
  for(let i=0; i < string; i++) {
    list.append(createRow(arr[i], arr[i+9], arr[i+10]));
  }
  list.classList.add('list_visible');
};

form.addEventListener('submit', handleButtonSubmit);
