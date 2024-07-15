const array = ['OR', ['<', 'a', 'b'], ['AND', ['==', 'c', 'd'], ['!=', 'e', 'f']]];

function solve(array) {
    let output = '';
    let stack = [];
    array.forEach(element => {
        if(Array.isArray(element)) {
            let tempString = '(' + solve(element) + ')';
            stack.push(tempString);
        }
        else {
            stack.push(element);
        }
    });
    while(stack.length != 0) {
        let operator = stack.shift();
        let first = stack.shift();
        let second = stack.shift();
        output += `${first} ${operator} ${second}`;
    }

    return output;
}

console.log(solve(array));