// when functions are invoked a new execution context for each function is created
// 'this' and 'argument' keywords are available inside the function
// this refers to the object who called the function
// argument are function parameters
// argument keyword has some issues while iterating so can use spread operator (...arg)
// every function has it's own variable environment that include all available variables 

function hello() {
    console.log('hello world');
}
// different ways of invoking
hello();
hello.call();

let obj = {
    hello() {
        console.log('Hello World');
    }
}
obj.hello();

let square = new Function('num', 'return num * num;');
console.log(square(5));

// adding a property to a function
hello.description = 'just printing hello world';
obj.hello.description = 'funcction of the object';
square.description = 'returning square of a number';

console.log(hello.description);
console.log(obj.hello.description);
console.log(square.description);

// FUNCTIONS ARE DATA - FUNCTIONS AS FIRST CLASS CITIZENS

let sum = function(num1, num) { return num1 + num; };

function a(b)
{
    b();
    return function c() { console.log('c returned from a');};
}
let c =  a(function() {console.log('b passed as argument to a');});
c();

// as above, we can use functions in many ways. they can be assigned to a variable
// passed to a function or returned from a function
// we can use functions like any other data

// avoid creating functions inside loop
// default paremeters are good