// add a method lastYear to Date to get the last year
Date.prototype.lastYear = function() {
    return this.getFullYear() - 1;
}

console.log(new Date().lastYear());

Array.prototype.map = function() {
    let array = [];
    for (let i = 0; i < this.length; i++) {
        array.push(this[i] + '$');
    }
    return array;
}

console.log([1,2,3].map());