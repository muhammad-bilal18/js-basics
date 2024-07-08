// Function scope means variables defined inside a function are only accessible within 
// that function and not outside of it.

function exampleFunction() {
    let localVar = 30;
    console.log(localVar);  // Accessible
}

console.log(localVar);  // Error: localVar is not defined outside exampleFunction


// Block scope refers to variables declared within a block, typically bounded by curly 
// braces {} (e.g., in if, for, while statements).

if (true) {
    // Block scope
    let blockVar = 40;
    console.log(blockVar);  // Accessible
}

console.log(blockVar);  // Error: blockVar is not defined outside the if block
