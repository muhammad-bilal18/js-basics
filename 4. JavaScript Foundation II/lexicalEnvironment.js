// https://medium.com/@mohdtalib.dev/lexical-environment-in-javascript-a2112b78a3cb#:~:text=A%20lexical%20environment%20in%20JavaScript,scope%20or%20the%20lexical%20closure.

// A lexical environment in JavaScript is a data structure that stores the variables and 
// functions that are defined in the current scope and all of the outer scopes. It is also 
// known as the lexical scope or the lexical closure.

function outer() {
    var x = 10;
    function inner() {
      // The lexical environment of `inner()` contains the variable `x` from `outer()`.
      console.log(x);
    }
    inner();
}
outer();


