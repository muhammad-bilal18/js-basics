// pure function has:
// 1. no side effect 
// 2. same output, no matter how many times is called

let arr = [1,2,3];
let arr2 = [1,2,3];

function _double(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] *= 2;
    }
}

function double(arr) {
    return arr.map(num => num*2);
}

_double(arr);
let outputArray = double(arr2);

console.log(arr, arr2, outputArray);

// arr is changes by _double
// arr2 has no change as double is a pure function