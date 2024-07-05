console.log("Hello, world!");

// Variables and Data Types
let firstName = "John";
let age = 30;
const PI = 3.14;
let isActive = true;
let fruits = ["Apple", "Banana", "Cherry"];
let person = {
    name: "Alice",
    age: 25,
    isActive: true
};

// Objects
console.log(person.name); 
person.age = 26; 

// Arrays
console.log("Fruits array:", fruits); 
console.log("First fruit:", fruits[0]); 

fruits.push("Date"); 
console.log("Fruits after push:", fruits);

fruits.pop(); 
console.log("Fruits after pop:", fruits);

// Loops
console.log("Printing fruits with for loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("Printing fruits with forEach:");
fruits.forEach(function(fruit) {
    console.log(fruit);
});

// While Loop
let counter = 0;
console.log("Counting with while loop:");
while (counter < 5) {
    console.log(counter);
    counter++;
}

// Functions
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Bilal"));

// Control Flows and Conditions
let temperature = 25;
if (temperature > 30) {
    console.log("It's a hot day!");
} else if (temperature <= 30 && temperature >= 20) {
    console.log("It's a pleasant day.");
} else {
    console.log("It's cold today.");
}

console.log("Current person:", person);
console.log("Value of PI:", PI);
console.log("Is the person active?", person.isActive);
console.log("Greeting:", greet("Bilal"));



