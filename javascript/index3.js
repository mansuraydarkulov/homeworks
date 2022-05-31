const buttonDec = document.querySelector('.buttonDec');
const buttonSum = document.querySelector('.buttonSum');
const span = document.querySelector('.value');

buttonIncrement.addEventListoner('click', () => {
    let currentValue = span.textContent;
    span.textContent = currentValue + 1;
})