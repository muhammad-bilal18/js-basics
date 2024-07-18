class MyError extends Error {
    constructor(name, message, toDo) {
        super(message);
        this.name = name;
        this.toDo = toDo;
    }
    toString() {
        return `${this.name}: ${this.message}\nNote: ${this.toDo}`;
    }
}

function divide(param1, param2) {
    if (param2 === 0) {
        try {
            throw new MyError('MathError', 'division by zero is not allowed',
                'please enter a denominator that is not zero');
        } catch(error) {
            console.log(error.toString());
        }
    }
    return param1 / param2;
}

console.log(divide(9, 0));