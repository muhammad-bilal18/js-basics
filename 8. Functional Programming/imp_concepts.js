// idempotent
// code always do something expected

function idempotent(num) {
    console.log('input is ' + num); // not a pure function but is expected
}
idempotent(5); // expected output: input is 5
// imperative - we tell what and how

arr = [1,2,3];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// declerative - we tell what only

arr.forEach(num => console.log(num));

// immutability - not changing data/state

function makeUpperCase(str) {
    let newStr = str;
    return newStr.toUpperCase();
}
let input = 'bilal';
let output = makeUpperCase(input);
console.log(`input: ${input}, output: ${output}`)

// currying - converting a function with many parameters to many functions each with one parameter

function multiple(num, num2) {
    return num * num2;
}

let multiply = (num) => (num2) => num * num2;
let multiplyWithTwo = multiply(2);
console.log(multiplyWithTwo(10));

// hof and closures discussed earlier

// partial application
let multiply3 = (a, b, c) => a * b * c;
let partial = multiply3.bind(null, 5);
console.log(partial(2,3));