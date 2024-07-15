function createUser(name) {
    return {
        name: name,
        active: true,
        cart: [],
        purchases: []
    };
};

function createItem(name, price) {
    return {
        name: name,
        price: price
    };
};

function applyTax(price) {
    return price + (price * 0.03);
}

function addToCart(user, item) {
    const itemWithTax = { name: item.name, price: applyTax(item.price) };
    user.cart.push(itemWithTax);
    console.log(`${item.name} added to cart!`);
    return user;
}

function buyItem(user, item) {
    for(let i = 0; i < user.cart.length; i++) {
        if(user.cart[i].name === item.name) {
            user.cart.splice(i, 1);
            user.purchases.push(item);
            console.log(`${item.name} purchased!`);
            return user;
        }
    }

    console.log(`sorry ${user.name}, item does not exist in cart!`);
    return user;
}

function emptyCart(user, item) {
    user.cart = [];
    console.log('cart is empty!');
}

function compose(...funs) {
    return function(user, item) {
        return funs.reduceRight((accUser, fun) => fun(accUser, item), user);
    }
}

const user1 = createUser('Hitler');
const item1 = createItem('bat', 2000);
const item2 = createItem('ball', 300);

const purchaseProcess = compose(emptyCart, buyItem, addToCart);

purchaseProcess(user1, item1);
console.log(user1);
