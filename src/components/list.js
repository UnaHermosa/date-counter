// Функция, которая генерирует строки с требуемыми датами

function createRow(textSpe, textDoctor, textNurse) {
    const rowTemplate = document.querySelector('#row').content;
    
    const row = rowTemplate.querySelector('.list__item').cloneNode(true);
    const rowSPE = row.querySelector('.list__item_text-spe');
    const rowDoctor = row.querySelector('.list__item_text-doctor');
    const rowNurse = row.querySelector('.list__item_text-nurse');

    rowSPE.textContent = textSpe;
    rowDoctor.textContent = textDoctor;
    rowNurse.textContent = textNurse;

    return row;
    };

    
    export { createRow };