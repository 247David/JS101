//1. Will the code below raise an error?

// let numbers = [1, 2, 3];
// numbers[6] = 5;
// //no

// let numbers = [1, 2, 3];
// numbers[6] = 5;
// numbers[4];
// what will this line return?
//undefined

// let numbers = [1, 2, 3];
// numbers[6] = 5;
// numbers[5] = undefined; // => [ 1, 2, 3, <2 empty items>, undefined, 5 ]
//console.log(numbers.map(() => 10));//
//=> [ 10, 10, 10, <2 empty items>, 10, 10 ]

//2.How can you determine whether a given string ends with exclamation mark (!)?
// let str1 = "Come over here!"; // true
// let str2 = "What's up, Doc?"; // false
//solution:
// console.log(str1[str1.length - 1] === '!');
// console.log(str2[str2.length - 1] === '!');

// // alt solution:
// str1.endsWith("!"); // true
// str2.endsWith("!"); // false


//3
//Does object have people and age containing entry for 'Spot':

// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
//solution:
// console.log(Object.values(ages).includes('Spot'));

// //alt solution:
// console.log(ages.hasOwnProperty("Spot"));

//4. Using the following string, create a new string that contains all
//lowercase letters except for the first character,
//which should be capitalized.
// let munstersDescription = "the Munsters are CREEPY and Spooky.";
//solution:
// console.log(munstersDescription[0].toUpperCase() +
//             munstersDescription.slice(1).toLowerCase());

// alt solution:
// console.log (munstersDescription.charAt(0).toUpperCase() +
//   munstersDescription.substring(1).toLowerCase());

//5. What will the following code output?

// console.log(false == '0'); 
// console.log(false === '0');
//solution:
//true
//false

//6. We have most of the Munster family in our ages object:

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };