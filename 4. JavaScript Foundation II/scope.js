// Scope refers to the visibility and accessibility of variables in different parts of your 
// code during runtime.

// Global scope
let globalVar = 10;

function exampleFunction() {
    // Local scope (function scope)
    let localVar = 20;
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
}

console.log(globalVar); // Accessible
console.log(localVar);  // Error: localVar is not defined
