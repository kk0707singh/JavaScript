
//================basic to create functions=====================

function sayMyName(){
    // console.log("s");
    // console.log("i");
    // console.log("d");
    // console.log("h");
    // console.log("a");
    // console.log("r");
    // console.log("t");
    // console.log("h");
    return `sidharth`
}

// sayMyName()            calling the function using function name

//=====================INTERMEDIATE======================

// function addTwoNumbers(num1, num2){            //parameters are defined when we create function
//     console.log(num1 + num2);
    
// }


addTwoNumbers(4, 7)
addTwoNumbers(4, "7")
addTwoNumbers(4, null)    //jb funtion ko call kraate h tb usme hm argument pass krte hai



function addTwoNumbers(num1, num2){            //parameters are defined when we create function
    // let result = num1 + num2
    // return result

    return num1 + num2
    
}

const result = addTwoNumbers(3, 8)
// console.log(`result ${result}`);






// function loginUserMessage(username){
//     return `${username} Just logged in`
// }
// console.log(loginUserMessage("sidharth"))





// function loginUserMessage(username){
//     if (username===undefined) {
//         console.log("Please enter a username");
        
//         return
        
//     }
//     return `${username} Just logged in`
// }
// // console.log(loginUserMessage("sidharth"))
// console.log(loginUserMessage())




function loginUserMessage(username = "Sid"){
    if (username===undefined) {
        console.log("Please enter a username");
        
        return
        
    }
    return `${username} Just logged in`
}
// console.log(loginUserMessage("sidharth"))
// console.log(loginUserMessage("sidharth"))




// function calculateCartprice(numb1){
//     return numb1
// }
// console.log(calculateCartprice(2));


// ===================REST===================

function calculateCartprice(...numb1){
    return numb1
}
console.log(calculateCartprice(2, 6 ,9));





// function calculateCartprice(val1, val2, ...numb1){
//     return numb1
// }
// console.log(calculateCartprice(2,6,7,8,9));




const user  = {
    username: "Sidharth",
    price: 199
}

function handleObj(anyObj) {
    console.log(`username is ${anyObj.username} and price is ${anyObj.price}`);
    
}
(handleObj(user))

handleObj({
    username: "Sidharth"
})



const myNewArr = [200, 400, 500]
function returnSecondValue(getArray) {
    return getArray[1]
    
}

console.log(returnSecondValue(myNewArr));
