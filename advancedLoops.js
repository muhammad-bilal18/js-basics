// for-of loops only on iteratable data
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
    console.log(num);
}

// we basically iterate on iteratable data like arrays and strings
// objects are not iteratable, we can enumerate objects


const person = {
    name: 'Bilal',
    age: 22,
    city: 'Lahore'
};

for (const key in person) // enumerating object
{
    console.log(`${key}: ${person[key]}`);
}