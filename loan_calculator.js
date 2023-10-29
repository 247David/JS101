const readline = require('readline-sync');


let invalidNumber = function (input) {
    return input.trim() === '' ||
        Number.isNaN(Number(input)) ||
        Number(input) < 0;
}

while (true) {
    let loanAmount = readline.question('Enter loan amount: ');

    while (invalidNumber(loanAmount)) {
        console.log('Invalid loan amount was Entered.')
        loanAmount = readline.question('Enter valid loan amount: ');
    }

    let annualPercentageRate = readline.question('Enter annual percentage rate(apr): ');

    while (invalidNumber(annualPercentageRate)) {
        console.log('Invalid input for annual percentage rate!');
        annualPercentageRate = readling.question('Enter valid annual percentage amount:');
    }

    let loanDuration = readline.question('Enter loan duration (In years): ');

    while (invalidNumber(loanDuration)) {
        console.log('Invalid input for loan duration!');
        loanDuration = readline.question('Enter valid loan duration in years.')
    }

    let monthlyInterest = annualPercentageRate / 12;

    let loanDurationMonths = loanDuration / 12;

    let monthlyPayment = loanAmount * (monthlyInterest / (1 - Math.pow((1 + monthlyInterest), (-loanDurationMonths))));

    console.log(`Monthly payment is ${monthlyPayment.toFixed(2)}`);

    let calculatorExit = readline.question('N to exit or any key to continue: ');

    console.log(calculatorExit);
    console.log(typeof calculatorExit);

    if (calculatorExit.toLowerCase() === 'n') {
        break;

    }

}
