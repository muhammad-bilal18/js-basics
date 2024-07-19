const array = [2, 4, 5, 6, 7, 3, 4, 6, 7, 8, 9, 3, 4];

function solve(arr) {
    let length = arr.length;
    if (length < 2) return undefined;
    
    let count = {};
    
    for (let i = 0; i < length; i++) {
        if (count[arr[i]]) {
            return arr[i];
        } else {
            count[arr[i]] = 1;
        }
    }

    return undefined;
}

console.log(solve(array));