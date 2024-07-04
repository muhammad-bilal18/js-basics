let sentence = "The quick brown fox jumps over the lazy dog";

console.log(sentence.includes("fox"));
console.log(sentence.includes("cat"));

let number = "42";

console.log(number.padStart(5, "0"));
console.log(number.padStart(10, "abc"));

const obj = {
    id : 123,
    name: 'bilal',
    degree: 'bsse'
};

console.log('Keys: ' + Object.keys(obj));
console.log('Values: ' + Object.values(obj));
console.log('Entries: ' + Object.entries(obj));