
// ------------------NUMBERS------------------

const score = 400
console.log(score);     //automatically determines that 400 is number


const balance = new Number(1000)
console.log(balance);                //defined that the value will be in number

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));
// console.log(balance.toPrecision(4));    //point values pe deal krta hai


const hundreds = 1043795312386
console.log(hundreds.toLocaleString('en-IN'));


//-------------------MATHS--------------

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,5,2,6));
// console.log(Math.max(5,6,7,3,4));

console.log(Math.random());    // returns random value between 0-1

console.log((Math.random()*10)+1);  //shifts 1 value before decimal and we add 1 kyuki hme 0 se upar ki value chahiye
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);    //important line




















