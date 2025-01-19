const promisOne = new Promise(function(resolve, reject){
    // do aSynchronous tasks
    // DB calls, cryptography, networks
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    }, 1000)
})

promisOne.then(function(){
    console.log('Promise consumed');
    
})









new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2')
        resolve()
    },1000)
}).then(function(){
    console.log('Promise consumed');
    
})






const promisThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'sidharth', email: 'abcd@sid.com'})
    }, 1000)
    
})
promisThree.then(function(user){
    console.log(user);
    

})










const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: 'krishnaKantSingh', password:'1234'})
        }
        else{
            reject('ERROR Something went wrong:')
        }
        
    },1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);
    
}).catch((error)=>{
    console.log(error);
    
}).finally(()=>console.log('the promis is resolved or rejected'))









const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: 'javascript', password: '34567'})
        }
        else{
            reject('ERROR in JS something went wrong:')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive()










async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log('E:', error);
        
    }
    
}
getAllUsers()










fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
}).then((response) => {
    console.log(response);
})
.catch((error) => {
    console.log(error);
})