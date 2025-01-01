
const userEmail = []     //"k@singh.ai"
if (userEmail) {
    console.log("got the email");
}else{
    console.log("dont have email");
    
}


//truthy aur falsi values


// falsy values
// false, 0, -0, BigInt, 0n, null, undefined, NaN


// truthy values
// "0", "false", " ", [], {}, function(){}

if (userEmail.length===0) {
    console.log("array is empty");
    
}

// to check object is empty or not
const emptObj = {}

if (Object.keys(emptObj).length===0) {
    console.log("object is empty");
    
}




// nullish coalescing Operator(??): null unidentified

let val1;
// val1 = 5 ?? 10
// val1 = null??10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
console.log(val1);


// ternary operator
// condition  ? true : false

const iceTea = 100
iceTea >=80 ? console.log("too much costly") : console.log("cheper");



