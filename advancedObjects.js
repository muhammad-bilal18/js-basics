// Reference type
// When creating objects, they store a reference to where their data is stored in memory

let obj1 = {
    index: 0,
    value: 2
};

// obj2 is assigned the same reference as obj1, meaning they both point to the same object
let obj2 = obj1;

console.log(`Are obj1 and obj2 the same object? ${obj1 === obj2}`); // true

// obj3 is a new object with the same data as obj1, but it's a different object in memory
let obj3 = {
    index: 0,
    value: 2
};

console.log(`Are obj1 and obj3 the same object? ${obj1 === obj3}`); // false

// Context
// 'this' refers to the object that owns the function where 'this' is used

console.log(this); // global context
let newObj = {
    f: function() {
        console.log(this);
    }
};

newObj.f(); // When calling newObj.f(), 'this' refers to newObj itself

// Class in JavaScript

class Employees {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

class MernDeveloper extends Employees {
    constructor(name, id, role) {
        super(name, id);
        this.role = role;
    }

    display() {
        console.log(`name: ${this.name}, id: ${this.id}, role: ${this.role}`);
    }
}

const newDev = new MernDeveloper('Bilal', 530, 'Node Developer');
newDev.display();