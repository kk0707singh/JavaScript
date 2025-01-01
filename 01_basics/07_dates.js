//-------------------------DATES-----------------

// const myDate = new Date()
// console.log(myDate.toDateString());

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toUTCString());
console.log(myDate.getFullYear());

console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 4)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 4, 5, 4)
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("2023-01-12")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})














