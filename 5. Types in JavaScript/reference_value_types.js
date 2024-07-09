// primitive datatypes are passed by value

let num1 = 5;
let num2 = num1;

num2 = 10;

console.log(num1);
console.log(num2);

// non primitive types are passed by reference

obj1 = {
    name: 'Bilal',
    age: 22
};

obj2 = obj1;

obj2.age = 23;

console.log(obj1);
console.log(obj2);

// how to actually clone objects and arrays?

car1 = {
    brand: 'hundai',
    model: 'sonata'
};
car2 = {...car1};
car1.model = 'SONATA';

console.log(car1);
console.log(car2);
