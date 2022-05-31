const buttonDec = document.querySelector('.buttonDec');
const buttonSum = document.querySelector('.buttonSum');
const span = document.querySelector('.value');

const inputNumber = document.querySelector('.input-number')
const buttonSubmit = document.querySelector('.button-submit')

inputNumber.addEventListener('input', (event))

buttonDec.addEventListener('click', {} => {
    let currentValue = span.textContent;
    span.textContent = parseInt(currentValue) + 1;
})
buttonSum.addEventListener('click', {} => {
    let currentValue = span.textContent;
    span.textContent = parseInt(currentValue) - 1;
})