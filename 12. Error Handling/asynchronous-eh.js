async function fail() {
    try {
        await Promise.resolve('resolve');
        await Promise.reject('reject');
    } catch(error) {
        console.log("Error: " + error);
    }
}

fail();

const promise = new Promise((resolve, reject) => {
    reject('promise rejected')
});

promise.then(message => message)
    .then(message => {
        console.log(message)
    })
    .catch(message => console.log("catch " + message));
