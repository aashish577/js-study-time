let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString()); 
// console.log(myDate.toLocaleString()); 
// console.log(myDate.toTimeString()); 

// console.log(typeof myDate);

let createDate = new Date(2023, 0, 07, 5, 3)
// console.log(createDate.toLocaleString())

let helloDate = new Date("01-23-2025")
// console.log(helloDate.toLocaleString())


let myTime = Date.now()
// console.log(myTime)
// console.log(createDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate.toDateString());

console.log(`The date is ${newDate.getDate()} and the time is ${newDate.getTime()}`)

newDate.toLocaleString('default', {
    weekday: 'long'
})





