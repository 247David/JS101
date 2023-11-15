// console.log(true);    // true
// console.log(false);   // false

// function makeLonger(string, longer) {
//   if (longer) {
//     return string + string;
//   } else {
//     return string;
//   }
// }

// makeLonger("abc", true);  // 'abcabc'
// makeLonger("xyz", false); // 'xyz'

// function isDigit(char) {
//   if (char >= "0" && char <= "9") {
//     return true;
//   } else {
//     return false;
//   }
// }

// isDigit("5");  // true
// isDigit("a");  // false

// if (value === true) {
//   console.log("It's true!");
// } else if (value === false) {
//   console.log("It's false!");
// } else {
//   console.log("It's not true or false!");
// }

// //Expressions and condition
// let num = 5;

// if (num < 10) { // same as `if ((num < 10) === true)`
//   console.log("small number");
// } else {
//   console.log("large number");
// }


// //
// function isSmall(number) {
//   return number < 10;
// }

// let num = 15;

// if (isSmall(num)) {
//   console.log("small number");
// } else {
//   console.log("large number");
// }

//Logical Operators

// > true && true              // true
// > true && false             // false
// > false && true             // false
// > false && false            // false

// > let num = 5
// > num < 10 && num > 3       // true
// > num < 10 && num > 6       // false
// > num > 10 && num < 6       // false
// > num > 10 && num < 3       // false

//The precedence rules can cause much confusion, especially if your concept of 
//how to evaluate an expression differs from JavaScript's. Thus, it's a good idea 
//to always use parentheses with expressions that involve multiple operators:

// (num < 10) && (num > 3)

// > let num = 5
// > (num < 10) && (num > 0) && ((num % 2) === 1)
// = true

// > (num < 10) && (num > 0) && ((num % 2) === 1) && false
// = false

//The || Operator
// > true || true              // true
// > true || false             // true
// > false || true             // true
// > false || false            // false

// > let num = 5
// > num < 10 || num > 3       // true
// > num < 10 || num > 6       // true
// > num > 10 || num < 6       // true
// > num > 10 || num < 3       // false

//Short-Circuit Operators
//Both && and || exhibit a behavior called short-circuiting - Stops evaluating 
//sub-expressions once it can determine the final value. 
//&& short-circuits when entire expression can't be true; that is, when it encounters a false sub-expression. 
//|| - Short-circuits when expression can't be false; that is, at least one sub-expression is true.

// > false && undefined.length
// = false

// > true && undefined.length
// TypeError: Cannot read property 'length' of undefined

// let name = getNameFromUser();
// if (name) {
//   console.log(`Hi ${name}`);
// } else {
//   console.log("you must enter your name!");
// }

// let name = getNameFromUser();
// if (name === "") {
//   console.log("you must enter your name!");
// } else {
//   console.log(`Hi ${name}`);
// }

// let name = getNameFromUser();
// if (name === "") {
//   console.log("you must enter your name!");
// } else {
//   console.log(`Hi ${name}`);
// }

//Eslint - code analyzer
//it analyzes your code and offers advice about style, format, 
//coding practices, possible errors, and other problem

// $ npm install eslint@7.12.1 eslint-cli babel-eslint --save-dev
// Note that you must install these 3 packages for every project where 
//you need to use ESLint.
// $ npx eslint -v 
//currently recommending version 7.12.1 of ESLint as later versions 
//are currently causing difficulties.,
//usage:
//$ npx eslint test.js
