const readline = require('readline-sync');

console.log('Welcome to calculator');

console.log('What is the first number?');
let number1 = Number(readline.question());

console.log('What is the second number');
let number2 = Number(readline.question());

console.log('What operation would you like to perform ? \n 1) Add 2) Subtract 3) Mulitply 4) Divide');
let operation = readline.question();

let output;
if (operation === '1') {
    output = number1 + number2;
} else if (operation ==='2') {
    output = number1 - number2;
} else if (operation === '3') {
    output = number1 * number2;
} else if (operation === '4') {
    output = number1 / number2;
} else {
    output = 'Invalid operation';
}

console.log(`The result is ${output}.`);