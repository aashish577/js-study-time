


function myName (){
    console.log("A");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");
}

// myName()

// function addTwoNumbers (number1, number2){
//     console.log(    number1 + number2   )
// }

function addTwoNumbers (number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3 ,4)

// console.log("Result is:", result)

function loginUserMessage (username="sam"){
    if(!username){
        console.log("Please enter the username")
        return

    }
    return `${username} just logged in`
}


console.log(loginUserMessage("Aashish"))

