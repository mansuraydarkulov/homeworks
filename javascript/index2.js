//1
function sum(a, b) {
    return a + b;
  }
let result = sum(1, 2);
console.log(result);  

//2
function compare(a, b) {
    if (a > b) {
        console.log("А больше Б");
    } else {
        console.log("А меньше Б");
    }
  }
let resultСompare = compare(1, 2);

//3
let calcSum = (a, b) => a + b;
console.log(calcSum(2, 3))

let calcSub = (a, b) => a - b;
console.log(calcSub(4, 3))

let calcMult = (a, b) => a * b;
console.log(calcMult(2, 3))

let calcDiv = (a, b) => a / b;
console.log(calcDiv(6, 3))

// //4
// let userName = prompt('Как вас зовут');

// function showMessage() {

//   let message = 'Привет, ' + userName;
//   console.log(message);
// }

// showMessage();  