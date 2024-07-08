// hoisting
//      var _name = undefined; 
//      _name is hoisted only once. for the second time compiler will just ignore _name
//
var _name = 'bilal';
var _name = 'Bilal';

console.log(_name); // Bilal


// first hello() is hoisted with it's definition. when hello() is repeated compiler will
// override it's definition

hello(); // bye
function hello() {
    console.log('hello');
}

function hello() {
    console.log('bye');
}