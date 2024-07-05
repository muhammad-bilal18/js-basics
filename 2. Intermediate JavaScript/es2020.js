// big int
const bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber);

const anotherBigInt = BigInt("9007199254740991"); // creating BigInt from string
console.log(anotherBigInt);

const result = bigNumber + anotherBigInt;
console.log(result);

// optional chaining operator
const user = {
    id: 1,
    name: 'John',
    address: {
        city: 'New York',
        zipCode: '10001'
    }
};

console.log(user.address?.city); // New York 

console.log(user.address?.country?.name); // undefined

// Nullish Coalescing Operator example
const userInput = '';
const username = userInput ?? 'Guest';
console.log(username);

const age = 0;
const userAge = age ?? 18;
console.log(userAge);




