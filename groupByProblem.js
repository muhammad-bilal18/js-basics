const array= [
    {id:1,name:"Bilal", city:"Lahore"},
    {id:1,name:"Bilal", city:"Lahore"},
    {id:3,name:"Hafsa", city:"Karachi"},
    {id:4,name:"Rehan", city:"Lahore"},
    {id:5,name:"Saqib", city:"Karachi"},
    {id:6,name:"Farhan", city:"Islamabad"}
]

function groupBy(array, key) {
    return array.reduce((output, current) => {
        let _key = current[key];
        if(output.hasOwnProperty(_key))
            output[_key].push(current);
        else
            output[_key] = [current];

        return output;
    }, {});
}

console.log(groupBy(array, 'city'));