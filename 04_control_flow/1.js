// if
// = operator assignment 

// const isUserloggedIn = true

// const temperature = 20
// if ( temperature === 50){
//     console.log("less than 50");
    
// } else {
//     console.log("Temperature is greater than 50")
// }

// console.log("Execute")

// const score = 101

// if(score > 100){
//     const power = "run"
//     console.log(`User power : ${ power}`);
    
// }


// const balance = 1000

// if (balance < 500) {
//     console.log("less than 500");
    
// }else if (balance < 750){
//     console.log("less than 750");

// }else if(balance < 900){
//     console.log("less than 900");

// }else{
//     console.log("less than 1200");

// }



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// if (userLoggedIn && debitCard){
//     console.log("Allow to buy courses");
    
// }else{
//     console.log("couldnot login")
// }

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("Allow to buy courses");
}


{/* < less than, > greater than, <= less than equal to , >= less than equal to , == check if equal , != not equal .  */}

// === checks type as well, !==

// Nullish coalsescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10

// console.log(val1);

// val1 = undefined ?? 15

val1 = null ?? 10 ?? 15
// console.log(val1)


///// Ternary operator

// condition ? true : false

const icePack = 100
icePack <= 80 ? console.log("less than 80") : console.log("more than 80")