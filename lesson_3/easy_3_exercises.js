//1. 3 different ways to remove all of the elements from the following array:

// let numbers = [1, 2, 3, 4];
//solution
//way 1
// while (numbers.length) {
//   numbers.pop();
// }
//way 2
// numbers.splice(0,numbers.length);

//way 3
// numbers.length = 0;

// console.log(numbers);


//2. What will the following code output?
// console.log([1, 2, 3] + [4, 5]);
//solution:
// [1,2,34,5,]

//3. What will the following code output?

// let str1 = "hello there";
// let str2 = str1;
// str2 = "goodbye!";
// console.log(str1);

//output : "hello there"

//4. What will the following code output?
// let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
// let arr2 = arr1.slice();
// arr2[0].first = 42;
// console.log(arr1);
//Output: [{ first: 42 }, { second: "value2" }, 3, 4, 5]

//5. Rewrite function with one return and not explicitly use true or false

// function isColorValid(color) {

//     if (color === "blue" || color === "green") {
//       return true;
//     } else {
//       return false;
//     }
//   }
//Solution:
// function isColorValid (color) {
//   return (color === "blue" || color === "green");
// }

//6. Identify all variables, primitive values, and objects in code
// let arr = [1, 2, 3];
// let newArr = arr;

// const num = arr[0];
// let newNum = num;

// function double(num) {
//   return num * 2;
// }

// double(newNum);

//solution:
// variables - arr, newArr, num, newNum, double, num(in function)
// primitive values - 1,2,3,num,0, newNum, 2,
//num in funtion, double(newNum) => 2
// objects- double, arr