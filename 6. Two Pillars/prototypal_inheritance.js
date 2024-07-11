// every object has a prototype from which it inherits properties and methods
// .__proto__ property can be used to access the prototype

let obj = {
    _name: undefined,
    age: undefined,
    display() {
        console.log(`Hello my name is ${this._name} and my age is ${this.age}`)
    }
};

let person = {
    _name: 'Bilal',
    age: 22
}

person.__proto__ = obj;
person.display();

// let's check prototypes of array and function

let arr = []; console.log(arr.__proto__); // Object(0) []
function a() {
    console.log('function');
}
console.log(a.__proto__.__proto__); // [Object: null prototype] {}
