"use strict";//treated all JS code as newer version

// alert("Hello") //We are using nodejs, not browser

// console.log(3 + 3); //code readability should be high

// console.log("aashish")

// let name = "aashish" //string datatype
// let age = 18 //number datatype
// let isLoggedIn = false //boolena data type
// console.log(isLoggedIn)


//PRIMITIVE DATATYPES//

//number => 2^53
//bigint =>
//string => ""
//boolean => true/false

/*null => It is a standalon value and a datatype, 
representaion of empty value, 
NULL is a object*/

// undefined => when the value is not defined or assigned
//symbol => to find the uniqeness 


//OBJECT

// console.log(typeof undefined)//undefined
// console.log(typeof null)//object


// let iAMUseless = null;
// console.log(iAMUseless)

// let iAmstandby;
// console.log(iAmstandby)

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId)

const bigNumber = 4375987938739n

const heros = ["spiderman","batman"]


let myObj={
    name:"aashish",
    age:22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction)

