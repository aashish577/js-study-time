/// for of

["", "", ""]
[{}, {}, {}]

const arr = [1,2,3,4,5]
for (const num of arr) {
    //console.log(num);
    
    
}

const greetings = "Hello world!"

for (const greet of greetings) {
    //console.log(greet)
    
}

// Maps

const map = new Map()
map.set('NP', "Nepal")
map.set('IN', "India")

for (const key in map) {
   console.log(key)
}

// console.log(map);

for (const [key , value] of map) {
    //console.log(key, value);
    
    
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, value);
    
// }


