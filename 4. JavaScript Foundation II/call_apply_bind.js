
// call_apply_bind.js

/**
 * call(), apply(), bind() methods in JavaScript
 *
 * These methods are used to set the `this` value explicitly in functions.
 *
 * 1. call():
 *    - Invokes the function immediately.
 *    - The first argument is the `this` value.
 *    - The subsequent arguments are passed individually.
 *
 * 2. apply():
 *    - Invokes the function immediately.
 *    - The first argument is the `this` value.
 *    - The second argument is an array or array-like object of arguments.
 *
 * 3. bind():
 *    - Returns a new function with the `this` value set to the provided argument.
 *    - Does not invoke the function immediately.
 */

// Example Object
const person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

const person1 = {
    firstName: "John",
    lastName: "Doe"
};

const person2 = {
    firstName: "Mary",
    lastName: "Smith"
};

console.log(person.fullName.call(person1)); 

console.log(person.fullName.call(person2)); 


function greet(greeting, punctuation) {
    return greeting + ", " + this.name + punctuation;
}

const person3 = { name: "Alice" };
console.log(greet.call(person3, "Hello", "!"));

const person4 = { name: "Bob" };
console.log(greet.apply(person4, ["Hi", "."])); 

const person5 = { name: "Charlie" };
const greetCharlie = greet.bind(person5);
console.log(greetCharlie("Hey", "?")); 

function multiply(a, b) {
    return a * b;
}

const double = multiply.bind(null, 2);
console.log(double(5));

