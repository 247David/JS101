//Question 1 - Will the following functions return the same results?
function first() {
  return {
    prop1: "hi there",
  };
}

function second() {
  return;
  {
  prop1: "hi there";
  }
}
console.log(first());
console.log(second());

//Try to answer without running the code or looking at the solution.

//Ans: No. First returns the object and second returns undefined

//Question 2:
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);
// =>
// {
//   first: [1,2];
// }

//To not modify/store differently:
//let numArray = object["first"].slice();
//numArrat.push(2)
//or
//numArray = object["first"].concat();//return new array
//numArray.push(2);

//4.Identify all variables, primitive values, and objects in the following code:
function boo(scare) {
  let myBoo = scare.toUpperCase() + "!!!";
  console.log(myBoo);
}

const halloweenCollection = {
  greet: "Happy Halloween",
  scare: "Boo",
  wish: "May all your pumpkins be glowing",
};

let myBoo = boo(halloweenCollection["greet"]);

//variables: boo, scare, myBoo, halloweenCollection, myBoo
//objects: boo, halloween
//primitive values: myBoo, Scare.toUpperCase(), "!!!", greet, scare, wish,
//"Happy Halloween", "Boo", "May all your pumpkins be glowing", myBoo, "greet",
//undefined