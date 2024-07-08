// Global context

var _name = 'Bilal';
var a = 10;
function greeting() {
    console.log('hello ' + _name);
}

function outer() {
    var b = 20; // outer's context
  
    function inner() {
      var c = 30; // inner's context
      console.log(a, b, c); // 10, 20, 30
    }
  
    inner();
}