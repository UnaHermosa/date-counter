const form = document.querySelector('.page__form');
const buttonSubmit = form.querySelector('.page__form-button');
const list = document.querySelector('.list');

const map = [1, 2, 3];

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