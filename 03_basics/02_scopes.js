// // let a = 10
// // const b = 20
// // var c = 30
// // console.log(a);
// // console.log(b);
// // console.log(c);

// let a = 100
// if (true) {
//     let a = 10
//     const b = 20
//     console.log(`inner: ${a}`);
    
// }
// console.log(a);



//==================nested scope======================

function one() {
    const username = "Sidharth"
    function two(){
        const website = "yputube"
        console.log(username);
        
    }
    // console.log(website);
    two()
}
one()



if (true) {
    const username = "Sidharth"
    if (username === "Sidharth") {
        const website = "youtube chrome"
        console.log(`my name is ${username} and i am surfing on ${website}`);
    }
    // console.log(website);    scope is outside

    
}
// console.log(username);   this too is outside scope




//========================intresting=========================


// console.log(addOne(5))
// function addOne(num) {
//     return num+1
// }



console.log(addTwo(5));
const addTwo = function (num) {
    return num+2
}
// console.log(addTwo(5));


