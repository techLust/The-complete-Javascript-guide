// ********************* NAMED EXPORT ******************************

// Everythings are current scoped. If we want to use first "export" them.
// const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quentity) {
    cart.push(product, quentity);
    console.log(`${quentity} ${product} added to cart`);
}
// Exports are two types in javaScript, 1. Named export. 2. Default export

const totalPrice = 400;
const totalQuantity = 57;

export { totalPrice, totalQuantity };

const productName = 'Pizza';
const quantities = 10;

// export { productName as pName, quantities as itemName };
export { productName, quantities };


// ********************* DEFAULT EXPORT *****************************

// export default function (name) {
//     console.log(`Hi ${name} you are selected`);
// };


export const addWishLists = [];
export default function (wish) {
    addWishLists.push(wish);
};


class Person {
    greeting = "Hey";
    constructor(name) {
        this.name = name;
        console.log(`${this.greeting}, ${this.name}`);
    };
};

const mahatab = new Person('Mahatab');