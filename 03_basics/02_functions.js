function calculateCartPrice (...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500))

const user ={
    username: "Aashish",
    Price: 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)

const myNewArray = [200, 400, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))