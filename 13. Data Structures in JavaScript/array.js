let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

array.push(10); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let popedValue = array.pop(); // [1, 2, 3, 4, 5, 6, 7, 8, 9], popedValue = 10

let shiftedValue = array.shift(); // [2, 3, 4, 5, 6, 7, 8, 9], shiftedValue = 1

array.unshift(1); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

array.splice(3, 2, 6); // [1, 2, 3, 6, 6, 7, 8, 9]
array.splice(3, 1, 4, 5); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(array); 