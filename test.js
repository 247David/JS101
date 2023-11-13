// let names = ['kim', 'joe', 'sam'];
// names.forEach(_ => {
//   console.log(_);
// });


// let names = ['kim', 'joe', 'sam'];
// names.forEach((_, index) => {
//   console.log(`${index + 1}: got a name!`);
// });

// let a = 2;
// let b = Math.floor(Math.random() * 2);
// a *= b;
// console.log(a);
// console.log(b);
// if (a === 2) {
//   console.log('The value of `a` is two.');
// } else {
//   console.log('The value of `a` is NOT two.');
// }

// function longestWord3(sentence) {
//   let words = sentence.split(' ');
//   let savedWord = words.shift();

//   words.forEach(word => {
//     if (word.length > savedWord.length) {
//       savedWord = word;
//     }
//   });
//   return savedWord;
// }

//   console.log(longestWord3('The value of'));
// console.log(Number("123.4555"));
// let n = 1;

// n = '1';

// console.log(11 < '9'); // false
// console.log(123 <= 'a'); //false
// console.log(123 >= 'a'); //false
// console.log(123 == 'a'); //false
// console.log(false > null); //false
// console.log(undefined >= 1); //false

// function bar() {
//   let foo = 2;
//   console.log(foo);  // logs 2
// }
// console.log(foo);
// let foo = 1;
// bar();

// function foo1(a) {
//     return 2 * a;
//   }
  
//   let foo2 = function(a) {
//     return 2 * a;
//   };
  
//   const foo3 = a => 2 * a;
  
//   // create a random integer between 0 and 9
//   let randomNumber = Math.floor(10 * Math.random());
  
//   console.log(foo1(randomNumber));
//   console.log(foo2(randomNumber));
//   console.log(foo3(randomNumber));