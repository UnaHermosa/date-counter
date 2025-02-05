import './styles/index.css';

const form = document.querySelector('.page__form');
const buttonSubmit = form.querySelector('.page__form-button');
const list = document.querySelector('.list');

/*
//Поиск невалидных полей ввода
function hasInvalidInput(inputList) {
  return inputList.some((input) => {return !input.validity.valid});
};
 
// Блокирование.разблокирование кнопки отправки данных формы
function toggleButtonState (inputList, buttonElement) {
  if(hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
  } else {
    buttonElement.disabled = false;
  }
};
 
//Добавление обработчиков событий всем фполям ввода в форме
function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.page__form-input'));
  const buttonElement = formElement.querySelector('.page__form-button');
  inputList.forEach((element) => {
    element.addEventListener('input', () => {
      toggleButtonState(inputList, buttonElement);
    })
  })
};
 
//Поиск всех форм на странице и добавления им обработчиков событий
function enableValidation() {
  const formList = Array.from(document.querySelectorAll('.page__form'));
  formList.forEach((form) => {
    setEventListeners(form);
  })
};
 
// Очистка формы от текстов ошибок валидации
function clearValidation(formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.page__form-input'));
  const buttonElement = formElement.querySelector('.page__form-button');

  toggleButtonState(inputList, buttonElement);
};

enableValidation();

function createRow(text) {
const rowTemplate = document.querySelector('#row').content;

const row = rowTemplate.querySelector('.row').cloneNode(true);

row.textContent = text;
return row;
};

form.addEventListener('submit', (evt) => {
evt.preventDefault();
console.log('Hi!');

map.forEach((item) => {
  list.append(createRow(item));
});
 
});
*/


// 1. Создать массив с датами-исключениями (выходные дни, праздничные дни)

const nonWorkingDays = [
  '01.01.2025', '02.01.2025', '03.01.2025', '04.01.2025', '05.01.2025', '06.01.2025', '07.01.2025', '08.01.2025',
  '11.01.2025', '12.01.2025', '18.01.2025', '19.01.2025', '25.01.2025', '26.01.2025', '01.02.2025', '02.02.2025',
  '08.02.2025', '09.02.2025', '15.02.2025', '16.02.2025', '22.02.2025', '23.02.2025', '01.03.2025', '02.03.2025',
  '08.03.2025', '09.03.2025', '15.03.2025', '16.03.2025', '22.03.2025', '23.03.2025', '29.03.2025', '30.03.2025',
  '05.04.2025', '06.04.2025', '12.04.2025', '13.04.2025', '19.03.2025', '20.03.2025', '26.03.2025', '27.03.2025',
  '01.05.2025', '02.05.2025', '03.05.2025', '04.05.2025', '08.05.2025', '09.05.2025', '10.05.2025', '11.05.2025',
  '17.05.2025', '18.05.2025', '24.05.2025', '25.05.2025', '31.05.2025', '01.06.2025', '07.06.2025', '08.06.2025',
  '12.06.2025', '13.06.2025', '14.06.2025', '15.06.2025', '21.06.2025', '22.06.2025', '28.06.2025', '29.06.2025',
  '05.07.2025', '06.07.2025', '12.07.2025', '13.07.2025', '19.07.2025', '20.07.2025', '26.07.2025', '27.07.2025',
  '02.08.2025', '03.08.2025', '09.08.2025', '10.08.2025', '16.08.2025', '17.08.2025', '23.08.2025', '24.08.2025',
  '30.08.2025', '31.08.2025', '06.09.2025', '07.09.2025', '13.09.2025', '14.09.2025', '20.09.2025', '21.09.2025',
  '27.09.2025', '28.09.2025', '04.10.2025', '05.10.2025', '11.10.2025', '12.10.2025', '18.10.2025', '19.10.2025',
  '25.10.2025', '26.10.2025', '02.11.2025', '03.11.2025', '04.11.2025', '08.11.2025', '09.11.2025', '15.11.2025',
  '16.11.2025', '22.11.2025', '23.11.2025', '29.11.2025', '30.11.2025', '06.12.2025', '07.12.2025', '13.12.2025',
  '14.12.2025', '20.12.2025', '21.12.2025', '27.12.2025', '28.12.2025', '31.12.2025'
];

// 2. Сформировать массив из дат, фильтруя их на предмет соответствия датам-исключениям

const getDatesArray = (start) => {
  const arr = [];

  while(arr.length < 30) {
    const date = new Date(start).toLocaleDateString();
    if(nonWorkingDays.includes(date)) {
      start.setUTCDate(start.getUTCDate() + 1);
    } else {
      arr.push(date);
      start.setUTCDate(start.getUTCDate() + 1);
    }
  }

  return arr;
};

// 3. Сформировать массив с датами для врачей
const getDoctorsDeadlines = (start) => {
  const arr = getDatesArray(start, 100);
  return arr.slice(8, 38);
};



// 4. Сформировать массив с датами для медсестер

const getNursesDeadlines = (start) => {
  const arr = getDatesArray(start, 100);
  return arr.slice(9, 39);
};


// 5. Вывести на экран список дат

// Функция, формирующая массив дат комиссий



// Функция, формирующая массив дат сдачи заключений врачами (+9 дней)

/*const getDoctorDatesArray = (arr) => {
  const newArr = arr.slice(1, -1);

  return newArr;
}

const arr = getDatesArray(new Date('2025-02-01'), new Date('2025-02-06'));*/
