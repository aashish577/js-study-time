// const facebook = new Object()  //////// SINGLETON OBJECT

const facebook = {}       //////NON SINGLETON OBJECT
facebook.id = "123abc"
facebook.name = "Hero"
facebook.isLoggedIn = false


// console.log(facebook);
// console.log(facebook1)

const myUser = {
    email: "hello@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hello",
            lastname: "simon"
        }
    }
}


console.log(Object.keys(myUser));
console.log(Object.values(myUser));

// console.log(myUser.fullname.userfullname.firstname);

const object1 = {
    1: "a",
    2: "b"
}
const object2 = {
    3: "a",
    4: "b"
}
// const object3 = Object.assign({},object1, object2)

// const object3 = {...object1, ...object2}
// console.log(object3);

const users = [
    {
        id:1,
        email:"a@gmail.com"
    },{
        id:1,
        email:"b@gmail.com"
    },{
        id:1,
        email:"c@gmail.com"
    },{
        id:1,
        email:"d@gmail.com"
    }
]

// console.log(users[2].email)
