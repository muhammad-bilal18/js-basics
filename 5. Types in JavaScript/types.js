console.log(typeof 5);          // number
console.log(typeof 'Bilal');    // string
console.log(typeof {});         // object
console.log(typeof []);         // object

// in javascript arrays are objects
// primitive types have one value -> number, string, boolean
// object and array are non primitive types

let num = [1,2,3,4];
// how to find num is an array?

console.log(Array.isArray(num)); // true
