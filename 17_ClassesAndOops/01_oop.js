// object literals
const user = {
    username: 'Krishna Kant Singh',
    LogInCount: 8,
    signedIn: true,
    getUserDetails: function(){
        console.log('got user detail from database');
        console.log(`username: ${this.username}`);
        console.log(this);
        
        
    }
}
console.log(user.username);
console.log(user.getUserDetails());









// constructor function
const promisOne = new Promise()
const date = new Date()
// ek hi object se multiple instances (new keyword) aur isko hi hum construction function bolte hai

function user(username, LogInCount, isLoggedIn) {
    this.username = username;
    this.LogInCount = LogInCount;
    this.isLoggedIn = isLoggedIn
    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    return this
}
const userOne = new user('krishna kant singh', 12, true)
const userTwo = new user('sidharth', 13, true)
console.log(userOne);
console.log(userTwo);

// new keyword: sbse pahle ek empty object create hota hai aur usko hm instance bolte hai
// constructor function call hota hai coz of new keyword

