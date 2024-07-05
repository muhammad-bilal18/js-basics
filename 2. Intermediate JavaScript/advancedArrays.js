const array = [1,2,3,4,5,6,7,8,9,0];

// forEach() method

const evenNumbers = [];
array.forEach((num) => {
    if (num % 2 == 0)
        evenNumbers.push(num);
})

// map() method

const square = array.map(num => num * num);

const employees = [
    {
        name: 'Bilal',
        id: 100,
        skills: 'node js'
    },
    {
        name: 'Jahanzaib',
        id: 111,
        skills: 'node js, salesforce'
    }
]

const names = employees.map((emp) => emp.name);

// filter() method

const oddNumbers = array.filter((num) => (num % 2 != 0));

// reduce() method

const reduce = array.reduce((acc, num) => {
    return acc - num;
}, 100);
