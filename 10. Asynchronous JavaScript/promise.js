// A callback is a function passed as an argument to another function, 
// which can then be invoked at a later time. This is a common way 
// to handle asynchronous operations in JavaScript.

function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
}

function sayGoodbye() {
    console.log('Goodbye!');
}

greet('Alice', sayGoodbye);

// a promise is an object that may produce a single value in 
// fututre. eith a resolve value or reason that it's not resolved.
// it has three states, fulfilled, rejected, pending

let promise = new Promise((resolve, reject) => {
    let success = false;
    
    if (success) {
        resolve({
            status: 202,
            message: 'Operation was successful!'
        });
    } else {
        reject({
            status: 507,
            message: 'Operation failed!'
        });
    }
});

promise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});

// 2nd example

function asyncOperation(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value > 0) {
                resolve(`Value is ${value}`);
            } else {
                reject('Invalid value');
            }
        }, 1000);
    });
}

asyncOperation(5)
    .then(result => {
        console.log(result);
        return asyncOperation(result.length);
    })
    .then(result => {
        console.log(result);
        return asyncOperation(-1);
    })
    .then(result => {
        console.log(result);
    }) 
    .catch(error => {
        console.log('Error:', error);
    });

// 3rd example

function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

const apiURL = 'https://jsonplaceholder.typicode.com/posts/1';

fetchData(apiURL)
    .then(data => {
        console.log('Data fetched:', data);
    })
    .catch(error => {
        console.log('Error fetching data:', error);
    });