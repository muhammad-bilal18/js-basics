// spread operator - es9

let array = [1, 2, 3, 4];
function getProduct(a, b, c, d) {
    return a * b * c * d;
}
console.log(getProduct(...array));

let object = {
    number: 18,
    role: 'batter',
    isCaptain: false
};

// const [ number, ...all ] = array;
const { number, ...all } = object;

console.log(number, all);

// finally - will run no matter what

const promise = new Promise((success, failure) => {
    if (false)
        success('success');
    else
        failure('failure');
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.error(error);
}).finally(() => {
    console.log('finally')
})

// await with for-of loop

async function fetchMultipleUrls(urls) {
    try {
        let promises = urls.map(url => fetch(url));
        for await (request of promises) {
            let data = await request.json();
            console.log(data);
        }
    } catch (error) {
        console.log('Error fetching data:', error);
    }
}

const apiURLs = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];

fetchMultipleUrls(apiURLs);