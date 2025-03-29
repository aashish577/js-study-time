///////// Redue Method

const myNumbers = [1, 2, 3, 4, 5, 6, 7]

const initialValue = 0;

// const myTotal = myNumbers.reduce ( function (acc, curval) {
//     console.log(`acc value is: ${acc} and curval is ${curval}`);
    
//     return acc + curval
// }, 0)

// const myTotal = myNumbers.reduce ( (acc , curval) => acc+curval, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemname : 'js course',
        price: 399,

    },
    {
        itemname : 'python course',
        price: 599,

    },
    {
        itemname : 'data science course',
        price: 3259,

    },
    {
        itemname : 'vue course',
        price: 3199,

    },
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(totalPrice);




