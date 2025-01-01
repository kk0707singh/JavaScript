const marvelHeros = ["thor", "ironman", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]

console.log(Array.of(marvelHeros,dcHeros));

// marvelHeros.push(dcHeros)

// console.log(marvelHeros);
// console.log(marvelHeros[3][2]);



//-------------------concat/spread combines arrays-------------------------

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

// const all_Heros = [...marvelHeros, ...dcHeros]
// console.log(all_Heros);


const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);

console.log(Array.isArray("krishnakant"));
console.log(Array.from("krishnakant"));
console.log(Array.from({name: "krishnakant"}));   //intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));




