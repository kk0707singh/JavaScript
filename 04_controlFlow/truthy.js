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

