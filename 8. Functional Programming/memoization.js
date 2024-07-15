// 0 1 1 2 3 5 8 13 21 34

function fibonachi() {
    let map = {};
    return function(n) {
        if(n in map)
            return map[n];
        else {
            console.log('long time')
            map[1] = 0;
            map[2] = 1;
            for(let i = 3; i <= n; i++) {
                map[i] = map[i-1] + map[i-2];
            }
        }
        return map[n];
    }
}
let ithFibonachi = fibonachi();
console.log(ithFibonachi(10));
console.log(ithFibonachi(10));