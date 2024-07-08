// Example 1: Basic Use of `arguments`
function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(sum(1, 2, 3, 4)); // Output: 10


// Example 3: Using `arguments` to Overload Functions
function multiply() {
    if (arguments.length === 2) {
        return arguments[0] * arguments[1];
    } else if (arguments.length === 3) {
        return arguments[0] * arguments[1] * arguments[2];
    }
    return 0;
}

console.log(multiply(2, 3));    // Output: 6
console.log(multiply(2, 3, 4)); // Output: 24




function foo(...args) {
    console.log(args);
}

foo(1,2,3,4,5);
