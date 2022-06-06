function fib(n) {
    if(n<2) {
        return n;
    }
    return fib(n -1) + fib(n -2);
  }
console.log(fib(5));  

function fibonacci(num) {
    let a = 1;
    let b = 1;

    for (let i = 3; i <= num; i++) {
    let c = a + b;
        a = b;
        b = c;
    }
    return b;
  }
console.log(fibonacci(10));  
