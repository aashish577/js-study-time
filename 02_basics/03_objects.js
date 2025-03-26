///////object literals
// Object.create

const mySymbol = Symbol("Key1")

const myUser = {
    name: "Aashish",
    "fullname": "Aashish Acharya",
    age: "25",
    [mySymbol] : "98456",
    location: "Kathmandu",
    email: "aashish@gmail.com",
    isLoggedIn: "False",
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(myUser["full name"]);
// console.log(myUser["email"]);
// console.log(myUser.fullname);
// console.log(typeof myUser[mySymbol])
// console.log(typeof mySymbol)

// myUser.email = "achary@gmail.com"
// // console.log(myUser.email);
// // Object.freeze(myUser)
// myUser.email = "acharyaashish@gmail.com"
// console.log(myUser.email)

myUser.greeting = function(){

    console.log("Hello js user!");
    
}

myUser.greeting1 = function(){

    console.log(`Hello js user I am ${this.fullname}`);
    
}

console.log(myUser.greeting());
console.log(myUser.greeting1())
// myArray = ["h", "i"]