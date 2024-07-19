function reverse(str) {
    if(!str || typeof str !== 'string' || str.length < 2)
        return 'invalid input';

    let newStr = str.split('');
    let left = 0, right = str.length - 1;
    while(left < right) {
        let temp = newStr[left];
        newStr[left] = newStr[right];
        newStr[right] = temp;
        left++; right--;
    }

    return newStr.join('');
}
let str = 'Hello World';
console.log('Input: ' + str + '\nOutput: ' + reverse(str));