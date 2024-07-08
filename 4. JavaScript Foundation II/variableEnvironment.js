// Variable Environment
// The variable environment is a component of the execution context that holds the current 
// state of variables, including their values and scope. It consists of all the variables 
// declared in a function or globally.

// Global Variable Environment: This includes variables declared outside any function.
// Function Variable Environment: This includes variables declared inside a function, 
// including parameters.

var globalVar = "I am global";

function outerFunction() {
    var outerVar = "I am outer";

    function innerFunction() {
        var innerVar = "I am inner";
        console.log(innerVar); // Output: I am inner
        console.log(outerVar); // Output: I am outer
        console.log(globalVar); // Output: I am global
    }

    innerFunction();
}

outerFunction();
