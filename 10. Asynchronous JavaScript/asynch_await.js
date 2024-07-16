// asynch await
async function fetchSingleUrl(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let data = await response.json();
        console.log('Data fetched:', data);
    } catch (error) {
        console.log('Error fetching data:', error);
    }
}

//const apiURL = 'https://jsonplaceholder.typicode.com/posts/1';
//fetchSingleUrl(apiURL);


// -----------------------------------------------------------

async function fetchMultipleUrls(urls) {
    try {
        let promises = urls.map(url => fetch(url));
        let responses = await Promise.all(promises);

        responses.forEach(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok for URL: ' + response.url);
            }
        });

        let dataPromises = responses.map(response => response.json());
        let data = await Promise.all(dataPromises);

        console.log('Data fetched:', data);
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