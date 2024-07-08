// this.js

/**
 * The `this` keyword in JavaScript refers to the object it belongs to. 
 * It has different values depending on where it is used:
 * 
 * 1. In a method, `this` refers to the owner object.
 * 2. Alone, `this` refers to the global object (in a browser, it's `window`).
 * 3. In a function, `this` refers to the global object (in strict mode, it is `undefined`).
 * 4. In an event, `this` refers to the element that received the event.
 * 5. Methods like `call`, `apply`, and `bind` can refer `this` to any object.
 */

// Method in an object
const person = {
    firstName: "Muhammad",
    lastName: "Bilal",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName());

// Using `this` in object methods
const car = {
    make: "Hundai",
    model: "Sonata",
    displayInfo: function() {
        return `Car: ${this.make} ${this.model}`;
    }
};
console.log(car.displayInfo()); 

// Explicit binding using call/apply/bind
function greet() {
    return `Hello, ${this.name}`;
}
const user = {
    name: "Tony"
};
console.log(greet.call(user));

// Using `this` with arrow functions
const obj = {
    traditionalFunc: function() {
        console.log(this);
    },
    arrowFunc: () => {
        console.log(this); 
    }
};
obj.traditionalFunc();
