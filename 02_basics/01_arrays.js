// const myArr = [1, 2, 3, 4, 5]
// const myHeros = ["shaktiman", "naagraj", "doga"]

// const myArr2 = new Array(2, 3, 4, 5, 6)
// console.log(myArr[0]);

// -------------------Array methods---------------------

// myArr.push(7)
// myArr.push(6)
// myArr.pop()

// myArr.unshift(9)      //add 9 at the starting of the array
// myArr.shift()         //remove from the starting   

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()     //coverts it into string

// console.log(myArr);
// console.log(newArr);


//-------------------------slice---------------------------------

const arr = [8, 2, 1, 4, 5];

// let sliced = arr.slice(1, 4);
// console.log(sliced); // Output: [2, 1, 4]
// console.log(arr);    // Output: [8, 2, 1, 4, 5] (original array remains unchanged)



// Removing elements-----------------splice-----------------------
const removed = arr.splice(1, 2);
console.log(removed); // Output: [2, 1]
console.log(arr);     // Output: [8, 4, 5]





