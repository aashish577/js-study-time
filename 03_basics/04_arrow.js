const user = {
    username: "Aashish",
    price: "999",
    welcomeMessage : function (){
        // console.log(`${this.username},Welcome to website`);
        // console.log("Hello", this)
    }


}

// user.welcomeMessage()

// user.username = "Ram"

// user.welcomeMessage()

// console.log("Hi",this)

// function one (){
//     let username = "Aashish"
//     console.log(this.username);
// }

// one()


// const one = function () {
//     let username = "Aashish"
//     console.log(this.one);
// }

const one = () => {
    let username = "Aashish"
      console.log(this);
}

// one()

// const addTwo = (num1, num2) => {
//     return num1 + num2

// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)     ///Implicit return

const addTwo = (num1, num2) => ({username: "Aashish"})


console.log(addTwo(5,7))

const myArray = [1, 2, 3, 4, 5]

// myArray.forEach(()=>{

// })



