let multiplier = (factor) => (num) => num * factor;

const multiplyByTwo = multiplier(2);

console.log(multiplyByTwo(5));

// <--------------------------------------------------->

const fun = (f, g) => (num) => f(g(num));

function square(num) {
    return num**2;
}

function cube(num) {
    return num**3;
}

console.log(fun(cube, square)(2));