let compose = (f, g) => (data) => f(g(data));
let pipe = (f, g) => (data) => g(f(data))

// compose runs from right to left
// pipe in opposite way

let addTwo = (num) => num + 2;
let square = (num) => num * num;

let composeFun = compose(square, addTwo);
let pipeFun = pipe(square, addTwo);

console.log(composeFun(5)); // square(addTwo(5))
console.log(pipeFun(5)); // addTwo(square(5))