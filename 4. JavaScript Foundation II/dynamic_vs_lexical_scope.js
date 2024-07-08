/**
 * Dynamic Scope vs Lexical Scope in JavaScript
 *
 * Scope in programming defines the visibility or accessibility of variables. 
 * There are two primary types of scope: dynamic scope and lexical scope.
 *
 * 1. Dynamic Scope:
 *    - The scope is determined dynamically at runtime.
 *    - It depends on the call stack, i.e., from where the function was called.
 *    - JavaScript does NOT use dynamic scope.
 *
 * 2. Lexical Scope (Static Scope):
 *    - The scope is determined at compile-time (when the code is written).
 *    - It depends on where the function was declared.
 *    - JavaScript uses lexical scope.
 */

// Lexical Scope Example
function outerFunction() {
    const outerVariable = 'I am from the outer scope';

    function innerFunction() {
        console.log(outerVariable); // Accessible due to lexical scoping
    }

    innerFunction();
}

outerFunction(); // Logs: "I am from the outer scope"

// https://medium.com/@osmanakar_65575/javascript-lexical-and-dynamic-scoping-72c17e4476dd
