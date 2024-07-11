function createCounter() {
    let count = 0;
    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
        getCount() {
            return count;
        }
    }
}

let counter = createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.getCount());

// clousers are memory efficient

function getData() {
    let bigArray = new Array(1000).fill('$');
    console.log('big array created!')
    return function(index) {
        return bigArray[index];
    }
}
let getBigData = getData();
console.log(getBigData(500));
console.log(getBigData(400));
console.log(getBigData(300));

// array created only once and then put into the closures

// Encapsulation

function BankAccount() {
    let balance = 0;
    function validate(amount) {
        return typeof amount === 'number' && amount > 0;
    }

    return {
        deposit(amount) {
            if(validate(amount)) {
                balance += amount;
                console.log(`${amount}$ added to your account! New balance: ${balance}$.`);
            }
            else
                console.log('Invalid deposit amount!');
        },
        withdraw(amount) {
            if(validate(amount) && amount <= balance) {
                balance -= amount;
                console.log(`${amount}$ deducted from your account! New balance: ${balance}$.`);
            } 
            else if(amount > balance)
                console.log('Insufficient balance!');
            else
                console.log('Invalid withdrawal amount!')
        },
        checkBalance() {
            console.log(`Your balance is ${balance}$.`)
        }
    }
}

let account = BankAccount();

account.checkBalance();
account.deposit(1000);
account.withdraw(100);