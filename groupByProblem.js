const array= [
    {id:1,name:"Bilal", city:"Lahore"},
    {id:1,name:"Bilal", city:"Lahore"},
    {id:3,name:"Hafsa", city:"Karachi"},
    {id:4,name:"Rehan", city:"Lahore"},
    {id:5,name:"Saqib", city:"Karachi"},
    {id:6,name:"Farhan", city:"Islamabad"}
]

function groupBy(array, key) {
    let output = {};
    for(let i = 0; i < array.length; i++) {
        let _key = array[i][key];
        let value = array[i];
        if(output.hasOwnProperty(array[i][key]))
            output[_key].push(value)
        else
            output[_key] = [value];
    }
    return output;
}

console.log(groupBy(array, 'city'));
