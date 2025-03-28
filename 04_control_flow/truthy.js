const userEmail = []

if(userEmail){
    console.log("Got user email");
    
}else{
    console.log("dont have email")
}

// Falsy Values
// false, 0, -0, BigInt 0n, "" ,  null, undefined, Nan 
// truthy vlaues
//  "0" , 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty")
}

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty")
}

