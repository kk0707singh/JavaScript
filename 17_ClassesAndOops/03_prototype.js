
// challenge hai ye truelength bnana
let mychannel = 'chai     '
let myName = 'Krishnakantsingh         '
console.log(myName.trueLength);

let myHeros = ['thor', 'spiderman']
let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',
    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
    
}
Array.prototype.heyHitesh = function(){
    console.log('hitesh says hello');
    
}
heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()
// heroPower.heyHitesh()





// inheritance
const User = {
    name: 'krishna kant singh',
    email: 'kksingh@MediaQueryListEvent.com'
}

const Teacher = {
    makeVideo: true
}

const support = {
    isAvailable: true
}

const TAsupport = {
    makeAssignment: 'js notes',
    fullTime: true,
    __proto__: support
}
Teacher.__proto__=User




// ===================MODERN SYNTAX=============

Object.setPrototypeOf(support, Teacher)

let anotherUser = 'chaiaurcode    '
String.prototype.trueLength = function(){
    console.log(this);
    console.log(`true length is : ${this.trim().length}`);
    
    
}
anotherUser.trueLength()


