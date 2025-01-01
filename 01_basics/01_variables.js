const accountId = 155687
let accountEmail = "kk0707singh@gmail.com"
var accountPassword = "09876"
accountCity = "Jaipur"
let accountstate;

// accountId = 4 not allowed

accountEmail = "abcd@gmail.com"
accountPassword = "23456"
accountCity = "kota"

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountstate])
