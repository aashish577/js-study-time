//////// MAP

const myNumbers = [1, 2,3, 4, 5, 6, 7 ]

// const newNum = myNumbers.map( (num) =>{
//     return num + 10
// } )
// console.log(newNum);

const newNumbers = myNumbers
            .map( (num) => num * 10)
            .map( (num) => num / 10 )
            .filter( (num) => num <= 5 )

console.log(newNumbers);





