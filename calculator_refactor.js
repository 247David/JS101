const readline = require('readline-sync');

function prompt (msg) {
  console.log(`==> ${msg}`);
}
prompt('Welcome to calculator');

prompt('What is the first number?');
let number1 = Number(readline.question());

while (invalidNumber(number1)) {
  
}

prompt('What is the second number');
let number2 = Number(readline.question());

prompt('What operation would you like to perform ? \n 1) Add 2) Subtract 3) Mulitply 4) Divide');
let operation = readline.question();

let output;

switch (operation) {
  case '1':
    output = number1 + number2;
    break;
  case '2':
    output = number1 - number2;
    break;
  case '3':
    output = number1 * number2;
    break;
  case '4':
    output = number1 * number2;
    break;
  default:
    'Invalid operation';


}

prompt(`The result is ${output}.`);