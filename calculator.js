const readline = require('readline-sync');

console.log('Welcome to calculator');

console.log('What is the first number?');
let number1 = readline.question();

console.log('What is the second number');
let number2 = readline.question();

console.log('What operation would you like to perform ? \n 1) Add 2) Subtract 3) Mulitply 4) Divide');
let operation = readline.question();

