// An IIFE is a function expression that is defined and immediately invoked.

// Global scope
let globalVar = 10;

var iife = (function() {
    // IIFE scope
    let localVar = 20;
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
})();

console.log(globalVar); // Accessible
console.log(localVar);  // Error: localVar is not defined
