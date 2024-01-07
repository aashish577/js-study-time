const name = "aashish-acharya"
const num = 50

// console.log(name + num)

console.log(`Hello my name is ${name}and my number is ${num}`);

const gameName = new String('aashish')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('s'))

const newString = gameName.substring(0, 4)

console.log(newString);

const anotherString = gameName.slice(-7, 3)

console.log(anotherString)

const newString1 = '    aashish   '
console.log(newString1);
console.log(newString.trim());

const url = "https://aashish%@gmail.com"

console.log(url.replace('%@','-'))

console.log(url.includes('aashish'))



