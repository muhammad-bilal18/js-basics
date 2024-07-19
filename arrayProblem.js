const array = [
    { id: 'one', next: 'two', value: null },
    { id: 'two', next: 'three', value: null },
    { id: 'three', next: null, value: null }
];

function solve(array) {
    let output = array;
    let objects = {};
    
    output.forEach(element => {
        objects[element.id] = element;
    });
    
    output.forEach(element => {
        if (element.next !== null) {
            element.value = objects[element.next];
        }
    });
    
    return output;
}

console.log(solve(array));


// OUTPUT

// [
//     {
//         id: 'one', 
//         next: 'two', 
//         value: {
//             id: 'two',
//             next: 'three',
//             value: { id: 'three', next: null, value: null }
//         } 
//     },

//     { 
//         id: 'two',
//         next: 'three',
//         value: { id: 'three', next: null, value: null } 
//     },

//     { id: 'three', next: null, value: null }
// ]