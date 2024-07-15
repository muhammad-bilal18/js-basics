const array = ['OR', ['<', 'a', 'b'], ['AND', ['==', 'c', 'd'], ['!=', 'e', 'f']]];

function solve(array) {
    let output = '';
    let stack = [];
    for(let i = 0; i < array.length; i++) {
        if(Array.isArray(array[i])) {
            let tempString = '(' + solve(array[i]) + ')';
            stack.push(tempString);
        }
        else {
            stack.push(array[i]);
        }
    }
    while(stack.length != 0) {
        let operator = stack.shift();
        let first = stack.shift();
        let second = stack.shift();
        output += `${first} ${operator} ${second}`;
    }

    return output;
}

console.log(solve(array));