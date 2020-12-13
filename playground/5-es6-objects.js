// Object property shorthand

const name = 'Andrew'
const userAge = 27

const user = {
    name, // here we can use the shorthand syntax, because the property name is just like the variable name.
    age: userAge, // here we cannot bec. [age != userAge]
    location: 'Philadelphia'
}

console.log(user)

// Object Destructuring
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label; // baladi code
// const price = product.price; // baladi code

const {label:productLabel, price, rating = 5} = product; // rating = 5 / five is the default value thats going to be used if & only if the property is NOT defined in the object
console.log(productLabel, "\n", price, "\n", rating)


const transaction = (type, {label = '', stock = 0} = {}) => {
    console.log(type);
    console.log("Here i only got what i needed: ");
    console.log(label, ' / ', stock);
}

transaction('order', product)