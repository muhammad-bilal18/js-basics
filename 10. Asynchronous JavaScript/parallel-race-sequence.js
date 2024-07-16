const createPromise = (value, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, delay);
    });
};

const promise1 = createPromise('Promise 1', 1000);
const promise2 = createPromise('Promise 2', 2000);
const promise3 = createPromise('Promise 3', 3000);

const parallelExecution = async () => {
    try {
        const results = await Promise.all([promise1, promise2, promise3]);
        console.log('Parallel Execution Results:', results);
    } catch (error) {
        console.log('Error:', error);
    }
};

parallelExecution();

const raceExecution = async () => {
    try {
        const result = await Promise.race([promise1, promise2, promise3]);
        console.log('Race Execution Result:', result);
    } catch (error) {
        console.log('Error:', error);
    }
};

raceExecution();

const sequentialExecution = async () => {
    try {
        const result1 = await promise1;
        console.log('Sequential Execution Result 1:', result1);

        const result2 = await promise2;
        console.log('Sequential Execution Result 2:', result2);

        const result3 = await promise3;
        console.log('Sequential Execution Result 3:', result3);
    } catch (error) {
        console.log('Error:', error);
    }
};

sequentialExecution();