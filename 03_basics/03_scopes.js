
let c = 150

let a = 300

if (true) {
    let a = 10

    const b = 20

    // console.log("Inner:", a)
    // var c = 30
}



// console.log(a);
// console.log(b);
// console.log(c);


function one (){
    const username = "Aashish"

    function two (){
        const website = "Youtube"
        // console.log(username);
        
    }
    // console.log(website)

    two()
}

one()

if (true){
    const username = "Aashish"

    if(username === "Aashish"){
        const website = "Youtube"
        // console.log(username + website);
        
    }

    // console.log(website);
    // console.log(username);
}

// console.log(username);

/////========== INTERESTING CONCEPT
console.log(addone (5))
function addone (num){
    return num + 1
}



const addTwo = function (num){
    return num + 2
}

console.log(addTwo(5))      


