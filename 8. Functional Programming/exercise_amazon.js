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
}

function buyItem(user, item) {
    for(let i = 0; i < user.cart.length; i++) {
        if(user.cart[i].name === item.name) {
            user.cart.splice(i, 1);
            user.purchases.push(item);
            console.log(`${item.name} purchased!`);
            return;
        }
    }

    console.log(`sorry ${user.name}, item does not exist in cart!`);
}

function emptyCart(user) {
    user.cart = [];
    console.log('cart is empty!');
}

const user1 = createUser('Hitler');
const user2 = createUser('Bilal');

const item1 = createItem('bat', 2000);
const item2 = createItem('ball', 300);

