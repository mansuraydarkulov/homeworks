function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }
  console.log( fib(2) );  
  console.log( fib(9) ); 

function fibonacci(num) {
    let a = 1;
    let b = 1;

    for (let i = 3; i <= num; i++) {
    let c = a + b;
    }
    return b;
  }
  
  console.log( fibonacci(8) );  
  console.log( fibonacci(7) );  