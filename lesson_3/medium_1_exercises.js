//1. Write a program that outputs The Flintstones Rock! 10 times, with each line
// indented 1 space to the right of the line above it.

// let count = 0;

// while (count < 10 ) {
//   console.log(' '.repeat(count) + 'The Flintstones Rock!');
//   count += 1;
// }

//2. Starting with the string:
// let munstersDescription = "The Munsters are creepy and spooky.";
// //Return a new string that swaps the case of all of the letters:
// let newString = '';
// let index = 0;
// while (index < munstersDescription.length) {
//   if (munstersDescription[index] === munstersDescription[index].toUpperCase()) {
//     newString += munstersDescription[index].toLowerCase();
//   } else {
//     newString += munstersDescription[index].toUpperCase();
//   }
//   index += 1;
// }

// console.log(newString);

// alt solution:
// let newString = munstersDescription.split('').map(function (letter) {
//   if (letter === letter.toUpperCase()) {
//     return letter.toLowerCase();
//   } else {
//     return letter.toUpperCase();
//   }
// }).join('');

// console.log(newString);

//3.

// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   do {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   } while (divisor !== 0);
//   return factors;
// }

// This code would fail when the input is 0 or a negative number, and asked Alan
// to change the loop. How can he make this work without using a do/while loop?
// Note that we're not looking to find the factors for 0 or negative numbers,
// but we want to handle it gracefully instead of raising an exception or going
//into an infinite loop.

// function factors (number) {
//   let divisor = number;
//   let factors = [];
//   while (number > 0) {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   }
// }
//What is the purpose of number % divisor === 0 in that code?
//ii. whole number that can divide without reminder, a factor.

//4. Is there a difference between these implementations, other than the method
// she used to add an element to the buffer? You may assume that newElement will
//always be a primitive value.

// function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
//   buffer.push(newElement);
//   if (buffer.length > maxBufferSize) {
//     buffer.shift();
//   }
//   return buffer;
// }

// function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
//   buffer = buffer.concat(newElement);
//   if (buffer.length > maxBufferSize) {
//     buffer.shift();
//   }
//   return buffer;
// }

//1st function mutates buffer argument while 2nd function doesnt, it returns new

//5. What will the following two lines of code output?

// console.log(0.3 + 0.6); //> 0.9
// console.log(0.3 + 0.6 === 0.9); //>true

//6. What do you think the following code will output?

// let nanArray = [NaN];

// console.log(nanArray[0] === NaN);

//output: false. Number.isNaN()- used to compare for NaN else === with NaN
//always false.

//7. What is the output of the following code?
let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

// let newAnswer = messWithIt(answer);

// console.log(answer - 8);

//answer = 34

//8. One day, Spot was playing with the Munster family's home computer,
//and he wrote a small program to mess with their demographic data:

// let munsters = {
//   Herman: { age: 32, gender: "male" },
//   Lily: { age: 30, gender: "female" },
//   Grandpa: { age: 402, gender: "male" },
//   Eddie: { age: 10, gender: "male" },
//   Marilyn: { age: 23, gender: "female" },
// };

// function messWithDemographics(demoObject) {
//   Object.values(demoObject).forEach(familyMember => {
//     familyMember["age"] += 42;
//     familyMember["gender"] = "other";
//   });
}
//will this change the data?
// messWithDemographics(munsters);
//Yes. age and data values will be changed.

//9 .Function and method calls can take expressions as arguments. Suppose we
//define a function named rps as follows, which follows the classic rules of the
//rock-paper-scissors game, but with a slight twist: in the event of a tie, it
//just returns the choice made by both players.

// function rps(fist1, fist2) {
//   if (fist1 === "rock") {
//     return fist2 === "paper" ? "paper" : "rock";
//   } else if (fist1 === "paper") {
//     return fist2 === "scissors" ? "scissors" : "paper";
//   } else {
//     return fist2 === "rock" ? "rock" : "scissors";
//   }
// }

//What does the following code output?
// console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
//return paper


//10. Consider these two simple functions:
// function foo(param = "no") {
//   return "yes";
// }

// function bar(param = "no") {
//   return param === "no" ? "yes" : "no";
// }
// What will the following function invocation return?
// bar(foo());
//Ans: 'no'