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