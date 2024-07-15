function person(_name, age) {
    return {
        _name,
        age,
        introduction() {
            console.log(`Hello my name is ${this._name}, I am ${this.age} years old.`);
        }
    }
}

let person1 = new person('Bilal', 22);
let person2 = new person('Jahanzain', 32);

person1.introduction();
person2.introduction();

// whenever we create new object using this function, data is stored separately for each
// object and as function is same it's copied for each object on a separate memory
// 50 objects ? 50 copies of introduction()

// Object.create()
const functionStore = {
    introduction() {
        console.log(`Hello my name is ${this._name}.`);
    }
}

function human(_name, gender) {
    let newHuman = Object.create(functionStore);
    newHuman._name = _name;
    newHuman.gender = gender;
    return newHuman;
}

let human1 = new human('Hitler', 'male');
let human2 = new human('caesar', 'male');

human1.introduction();
human2.introduction();

// above method is more memory efficient as function is shared between instances of human