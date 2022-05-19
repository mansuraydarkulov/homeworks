// 1
var str = 'abcde';
alert(str);

// 2
const name = prompt('Пожалуйста, представьтесь?');

// 3
var num = '3';
var str = '""';
console.log(typeof num)
console.log(typeof str)

// 4
var a = prompt("Введите число a");
var b = prompt("Введите число b");
var c = 0;
c = (Number(a) + Number(b));
alert ("Cумма чисел: "+c);
c = (Number(a) / Number(b));
alert("Деление чисел: "+c); 

// 5
let x = prompt("Введите число x");
let y = prompt("Введите число y");
let number = 0;
let number = (Number(x) / Number(y));
if (number % 2 == 0) {
    alert("Число четное");
} else {
    alert("Число нечётное");
}

