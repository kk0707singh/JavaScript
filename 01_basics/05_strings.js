const name = "krishna kant singh"
const myRepoCount = 50

// console.log(name + myRepoCount);

console.log(`hello my name is ${name} and my repo count is ${myRepoCount}`);

// methods of string declaration
//  const myName = new String('Krishna kant Singh')
//  console.log(myName);

const myName = new String('KrishnakantSingh')
console.log(myName[0]);
console.log(myName.__proto__);
console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.charAt(2));
console.log(myName.indexOf('t'));
console.log(myName.slice(1,5));

// const newString = myName.substring(0,5)
// console.log(newString);

const anotherString = myName.slice(0,6)
console.log(anotherString);

const newName = '    SidharthSingh    '
console.log(newName);
console.log(newName.trim());

const url = "krishnakant@%20google.com"
console.log(url.replace('%20', '-'));
console.log(url.includes('krishna'));



