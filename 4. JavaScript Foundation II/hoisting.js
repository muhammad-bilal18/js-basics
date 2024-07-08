// Variable Hoisting with var:

console.log(a); // undefined
var a = 10;
console.log(a); // 10

// Variable Hoisting with let and const:

console.log(b); // Cannot access 'b' before initialization
let b = 20;

console.log(c); // Cannot access 'c' before initialization
const c = 30;

// Function Hoisting:

foo(); // "Hello"

function foo() {
  console.log("Hello");
}
