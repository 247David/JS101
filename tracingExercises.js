let num1 = 5;
function myFunc() {
    num1 = 10;
}
myFunc();
console.log(num1);
//=> 10

let num2 = 5;
function myFunc() {
    console.log(num2);
    num2 = 10;
}
myFunc();
console.log(num2);
//output => 
//5
//10


let num3 = 5;
function myFunc() {
  let num3 = 10;
}
myFunc();
console.log(num3);
//output => 5


let num4 = 5;
function myFunc() {
  console.log(num4);
  let num4 = 10;
}
myFunc();
console.log(num4);
//output =>
//Reference Error


let num5 = 5;
function myFunc(num5) {
  num5 = 10;
}
myFunc();
console.log(num5);
//output => 5


let num6 = 1;
while (num6 < 3) {
  num6 += 1;
}
console.log(num6);
//output => 3


let num7 = 1;
while (num7 < 3) {
  let num7 = 5;
  num7 += 1;
}
console.log(num7);
//output => infinite loop


//==Objects vs Primitive Values==

let myWord = 'Hello';
myWord.concat(' there.');

console.log(myWord);

//output => Hello


let myWord2 = 'Hello';
myWord.repeat(3);
console.log(myWord2);
myWord2.replace('H', 'J');
console.log(myWord2);
myWord2.toUpperCase();
console.log(myWord2);
//output => 
//Hello
//Hello
//Hello

let myWords3 = ['Hello'];
myWords3.push('Goodbye');
console.log(myWords3);
//output => ['Hello', 'Goodbye']

let myWords4 = ['Hello'];
myWords4.concat(['Goodbye']);
console.log(myWords4);
//output => ['Hello']


let myWords5 = ['Hello'];
myWords5[0].toUpperCase();
console.log(myWords5);
//output => ['Hello']

let myWords6 = ['Hello'];
myWords6[0] = myWords6[0].toUpperCase();

console.log(myWords6);
//output => ['HELLO']

//==VARIABLES AS POINTERS==
//1.
let myWord = 'Hello';
let myOtherWord = myWord;

console.log(myWord);
console.log(myOtherWord);
//output => 
//Hello
//Hello

//2.
let myWord = 'Hello';
let myOtherWord = myWord;
myWord = 'Goodbye';
console.log(myWord);
console.log(myOtherWord);
//output => 
//Goodbye
//Hello

//3.
let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords[0] = 'Hi';

console.log(myWords);
console.log(myOtherWords);
//output =>
//['Hi', 'Goodbye']
//['Hi', 'Goodbye']

//4.
let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords = ['Hi', 'Bye'];
console.log(myWords);
console.log(myOtherWords);
//output => 
//['Hi', 'Bye']
//['Hello', 'Goodbye']

//5.
let myWords = ['Hello', 'Goodbye'];
let myWord = myWords[0];
myWords[0] = 'Hi';

console.log(myWords);
console.log(myWord);
//output =>
//['Hi', 'Goodbye']
//'Hello'


//6.
let myWords = ['Hello', 'Goodbye'];
let myWord = 'Hi';
myWords[0] = myWord;
myWord = 'Hello';

console.log(myWords);
console.log(myWord);
//output => 
//['Hi', 'Goodbye']
//'Hello'