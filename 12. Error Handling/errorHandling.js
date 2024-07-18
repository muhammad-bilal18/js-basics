function divide(param1, param2) {
    try {
        if (param2 === 0) {
            throw new Error('division by zero is not allowed');
        }
        return param1 / param2;
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log('finally');
    }
}

console.log(divide(9, 0));