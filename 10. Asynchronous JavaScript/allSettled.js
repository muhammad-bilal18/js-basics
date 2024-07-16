// allSettled
const createPromise = (value, delay, shouldReject = false) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldReject) {
                reject(`Error: ${value}`);
            } else {
                resolve(value);
            }
        }, delay);
    });
};

const promise1 = createPromise('Promise 1', 1000);
const promise2 = createPromise('Promise 2', 2000, true);
const promise3 = createPromise('Promise 3', 3000);
const allSettledExecution = async () => {
    const results = await Promise.allSettled([promise1, promise2, promise3]);
    console.log('All Settled Results:', results);
};

allSettledExecution();