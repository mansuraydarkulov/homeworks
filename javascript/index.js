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

// 4 и 5 
var a = prompt("Введите число a");
var b = prompt("Введите число b");
var c = 0;
c = (Number(a) + Number(b));
alert ("Cумма чисел: "+c);
c = (Number(a) / Number(b));
alert("Деление чисел: "+c); 

// 6
var x = prompt("Введите число x");
var y = prompt("Введите число y");
var number = 0;
var number = (Number(x) / Number(y));
if (number % 2 == 0) {
    alert("Число четное");
} else {
    alert("Число нечётное");
}

// 8
var a = 3;
var b = '3';
var c = 0;
var d = 'false';
console.log(a === b);
console.log(a == b);
console.log(c === d);
console.log(c == d);

// 9
var num = '11';
var str = 'Hello';
var str = 'Hello';
var str1 = { a: 1 };
var str2 = null;
var str3 = false;
console.log(typeof num);
console.log(typeof str);
console.log(typeof str1);
console.log(typeof str2);
console.log(typeof str3);
