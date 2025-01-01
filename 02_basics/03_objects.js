//literals
// Object.create    //creating with the help of constructer aur isme hi literals

//object literals

const mySym = Symbol("key1")   //Symbol ke jaise use krna hai create symbol

// const JsUser = {
//     name: "krishnakantSingh",
//     "full name": "krishnaKantSingh",
//     mySym: "key1",
//     [mySym]: "mykey1",    //proper use of symbol
//     age: 24,
//     location: "dehradun",
//     email: "abcd@google.com",
//     isLoggedIn: false,
//     lastLogInDays: ["monday", "saturday"]

// }

// console.log(JsUser.location);  //objects ko access krne ka tarika
// console.log(JsUser["email"]);  //objects ko access krne ka dusra tarika aur best tarika
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym);   //returns string value we are not getting a Symbol value
// console.log(JsUser[mySym]);

JsUser.email = "bcde@chatgpt.com"  //kuchh v hme agr change krna ho object ke anda to hm aise change krte h
console.log(JsUser);

// Object.freeze(JsUser)   //freeze hone k baad koi chnge nhi hoga


const JsUser = {
    name: "krishnakantSingh",
    "full name": "krishnaKantSingh",
    mySym: "key1",
    [mySym]: "mykey1",    //proper use of symbol
    age: 24,
    location: "dehradun",
    email: "abcd@google.com",
    isLoggedIn: false,
    lastLogInDays: ["monday", "saturday"],
    // greeting: function(){
    //     console.log("Hello Js User");
    // }

}


JsUser.greeting = function(){
    console.log("Hello Js User");
    
}

JsUser.greetingTwo = function(){
    console.log(`hello Js User, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





