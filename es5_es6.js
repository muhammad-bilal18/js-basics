// Destructuring
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

const { firstName } = person;
console.log('First Name: ' + firstName);

// Template Strings
const fullName = `${firstName} ${lastName}`;
console.log(`Full Name: ${fullName}`);

// Default Arguments
function greet(name = "Bilal") {
    return `Hello, ${name}!`;
}

console.log(greet()); 
console.log(greet("Jahanzaib"));

// Arrow Functions
const multiply = (a, b) => a * b;
console.log(multiply(5, 3));

const square = x => x * x;
console.log(square(4));

const greetArrow = name => `Hello, ${name}!`;
console.log(greetArrow("Bob"));
