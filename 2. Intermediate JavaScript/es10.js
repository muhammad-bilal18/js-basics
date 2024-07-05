// flat, flatMap

let nestedArray = [1, 2, [3, 4], [5, [6]]];
let flattenedArray = nestedArray.flat(2);

console.log(flattenedArray);

// trimStart, trimEnd
let greeting = "   Hello, world!   ";

console.log(greeting.trimStart());
console.log(greeting.trimEnd());

// fromEntries method
let entries = [['name', 'John'], ['age', 30]];
let obj = Object.fromEntries(entries);

console.log(obj);

// Try...Catch example
function divide(a, b) {
    try {
        if (b == 0) {
            throw new Error('Division by zero is not allowed!')
        }
        return a / b;
    } catch (error) {
        console.error(error.message);
    }
}

console.log(divide(10, 2));
console.log(divide(10, 0)); 
