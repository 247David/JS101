// 1. Given a string, return a new string that replaces every occurrence
// of the word "important" with "urgent":

// let advice = "Few things in life are as important as house training your pet dinosaur.";

// console.log(advice.replace('important','urgent'));

// two or more occurrences:
//only loop or method?

//2.Write two ways of reversing the array without mutating the original array.
//Use reverse for the first solution, and sort for the second.


// let numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]
//solution without mutating the original
// console.log([...numbers].reverse());
// //or
// console.log(numbers.slice().reverse());
// console.log(numbers);


// numbers = [1, 2, 3, 4, 5];
// numbers.sort((num1, num2) => num2 - num1);
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]
// console.log([...numbers].sort((num1, num2) => num2 - num1));
// console.log(numbers);
//notes
// slice() - strings and arrays
//[...array] - copy of array withou mutating original
//noq

//forEach to reverse
// let reversedArray = [];
// // let arrayLenght = number.length;
// numbers.forEach(function(number, index) {
//   reversedArray[4 - index] = number;
// });
// console.log(reversedArray);
// // alt solution
// numbers.forEach((number) => {
//   reversedArray.unshift(number);
// });

//3.Given a number and an array, determine whether the number is included.
// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8;  // false
// let number2 = 95; // true

// console.log(numbers.indexOf(number1) !== -1);
// console.log(numbers.includes(number2));


// 4.  2 different ways to put "Four score and " in front of string below

// let famousWords = "seven years ago...";

// console.log("Four score and ".concat(famousWords));
// console.log("Four score and " + famousWords);


//5. [1, 2, 3, 4, 5] - mutate array by removing the number at index 2
// let numbers = [1, 2, 3, 4, 5];
// numbers.splice(2,1);
// console.log(numbers);

//6. unnest the nested array below in a newy array

// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);
// ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
// to
//[ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]


//solution
// flintstones = [].concat(...flintstones);
//alt soltuion:
// flintstones = flintstones.reduce((accum, element) => {
//   return accum.concat(element);
// }, []);
//alt
// let newFlintstones = flintstones.flat();
//alt

// let newFlintstones = [];
// flintstones.forEach(element => {
//   newFlintstones = newFlintstones.concat(element);
// });

//7. Create array that has two elements [ 'Barney', 2 ] from the object

// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4,
//   Pebbles: 5 };

// console.log(Object.entries(flintstones).filter( function (pair) {
//   return pair[0] === 'Barney';
// }).shift());

//8. How would you check whether the objects assigned to variables numbers and
//table below are arrays?

// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));

// 9. 40-character wide with spaces?

// let title = "Flintstone Family Members";
// let padding = Math.floor((title.length) / 2);
// //solution
// console.log(' '.repeat(padding) + title + ' '.repeat(padding));
// //alt solution
// title.padStart(padding + title.length);

// Notes
// both string and array - slice, indexOf, length, replace?, includes, concat
// array - splice(index,no od deletes)
//typeof does not work with arrays vs objects(both objects) 
//USE: Array.isArray(input)

// 10. Write a one-line expression to count the number of lower-case t chars
//in each of the following strings:
// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";

//solution
// statement1.split('').filter(char => char === 't').length;
// statement2.split('').filter(char => char === 't').length;