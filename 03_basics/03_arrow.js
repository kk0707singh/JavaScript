let username = "akshat"

const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
user.welcomeMessage()
user.username = "Sidharth"
user.welcomeMessage()

console.log(this);





// function chai(){
//     let username = "sidharth"
//     console.log(this.username);
    
// }
// chai()




// const chai = function(){
//     let username = "sidharth"
//     console.log(this.username);
    
// }
// chai()




// const chai = () => {
//     let username = "sidharth"
//     console.log(this.username);
    
// }

// chai()



// const addTwo = (num1, num2)=>{
//     return num1+num2
// }

// console.log(addTwo(5,4));



// ================implicit return=================


// const addTwo = (num1, num2)=> num1+num2

// const addTwo = (num1, num2)=> (num1+num2)
// console.log(addTwo(5,4));




// const addTwo = (num1, num2)=> ({username: "Sidharth"})   //object ko return krnge  ( ) use krke

// console.log(addTwo());




