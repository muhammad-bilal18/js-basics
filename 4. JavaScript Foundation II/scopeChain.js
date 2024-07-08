// The scope chain is a list of all the variable environments in the current execution context. 
// It determines the order in which variables are looked up when they are referenced. The scope 
// chain ensures that the JavaScript engine checks for variables in the correct order: starting 
// from the local scope, then moving up to the parent scopes, and finally to the global scope.

var a = 1;

function first() {
    var b = 2;

    function second() {
        var c = 3;
        console.log(a); // Output: 1
        console.log(b); // Output: 2
        console.log(c); // Output: 3
    }

    second();
}

first();
