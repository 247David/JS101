const readline = require('readline-sync');

let loanAmount = readline.question('Enter loan amount: ');

let annualPercentageRate = readline.question('Enter annual percentage rate(apr): ');

let loanDuration = readline.question('Enter loan duration: ');

console.log(`${loanAmount} ${annualPercentageRate} ${loanDuration}`);