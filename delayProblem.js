// You need to implement a function delayedPromiseChain that takes an array of functions, each returning a promise, 
// and executes them in sequence with a specified delay between each execution. The goal is to create a delayed chain 
// of promises where the next promise starts only after the previous one has resolved.
// Your task is to implement the delayedPromiseChain function, which should return a promise that resolves with the 
// result of the last function in the array after all promises have been executed in sequence.
const promise1 = () => new Promise(resolve => setTimeout(() => resolve(1), 1000));
const promise2 = () => new Promise(resolve => setTimeout(() => resolve(2), 500));
const promise3 = () => new Promise(resolve => setTimeout(() => resolve(3), 800));
const promise4 = () => new Promise(resolve => setTimeout(() => resolve(4), 300));
const promiseFunctions = [promise1, promise2, promise3, promise4];
const delay = 1000;
function delayedPromiseChain(promiseFunctions, delay) {
    let allPromises = promiseFunctions.map(func => func());
    let last = Promise.resolve();
    allPromises.forEach((promise) => {
        last = last.then(() => {
            return new Promise(resolve => {
                setTimeout(() => {
                    promise.then(currVal => {
                        console.log(currVal);
                        resolve(currVal);
                    })
                }, delay);
            });
        });
    });
    return last;
}

async function solve(array, delay) {
    let output;
    for(func of array) {
        await new Promise(resolve => setTimeout(resolve, delay));
        output = await func();
        console.log(output);
    }
    return output;
}

let output = solve(promiseFunctions, delay);
output.then((value) => {
    console.log(value);
})