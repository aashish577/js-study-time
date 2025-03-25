const myHeros = ['Ironman', 'Thor', 'Hulk']

const myHeros1 = ['batman', 'superman', 'flash']

// myHeros.push(myHeros1)

// console.log(myHeros);

// const allHeros = myHeros.concat(myHeros1)

// console.log(allHeros);

const allnewHeros = [...myHeros, ...myHeros1]
// console.log(allnewHeros);

const anotherArray = [1,2,3,[4,5,6], 7, [6,7,[4,5]] ]

const real_another_Array = anotherArray.flat(Infinity)
// console.log(real_another_Array);

// console.log(Array.isArray("Aashish"))
// console.log(Array.from("1223545"))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
