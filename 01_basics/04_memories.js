// STACK AND HEAP MEMORY
// --- stack is usde in primitive data type
// ---- heap used in non-primitive data type

let myName = "aashishacharya"

let anotherName = myName
console.log(myName);

anotherName = "aashish ko naya channel"
console.log(anotherName);



let user = {
    email:"aashish@google.com",
    esewaid: "98432"
}

let user1 = user

user1.email = "aashish@gmail.com"

console.log(user.email)
console.log(user1.email)



