// primitive
//  7 types : String, Number, Boolean, null, undefined, symbol, bigint
// call by value 


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId);


const bigNumber = 1234567890n




// call by refrence (Non Premitive)
//  Arrays, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"]

let myObj = {
    name: "Krishna",
    age: 24,
}
console.log(heros);



// functions
// function(){} function declaration

const myFunction = function(){
    console.log("Hello World");
    
}     //variable declaration using cost

console.log(typeof myFunction);

// stack(premitive), Heap (Non-premitive)

let myCollegename = "KrishnaKantSingh"
let anothername = myCollegename
anothername = "Sidharth"
// console.log(anothername);
console.log(myCollegename);


// Non premitive

let userOne = {
    email: "user@google.com",
    upi: "abcd@ybl"
}

let userTwo = userOne
// console.log(userOne);
// console.log(userTwo);

userTwo.email = "sid@google.com"

console.log(userOne.email);
console.log(userTwo.email);




