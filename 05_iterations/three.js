// for of loop
//  ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const MyValues of arr) {
    console.log(MyValues);
    
}




// =====================String iterations=====================

const greetings = "Hello Good Morning ji"
for (const greet of greetings) {

    // if (greet == "G") {
    //     console.log("i got G Value");
    //     continue
        
    // }
    console.log(`Every single character of ${greet}`);
    
}




// ==============================MAPS=============================

const map = new Map()          //   MAP DECLARATION---------
map.set('IN', 'India')
map.set('USA', 'UnitedStatesOfAmerica')
map.set('RUS', 'Russia')
map.set('U.P.', 'UttarPradesh')
// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':--', value);
    
    
}




// const MyObj = {
//     'Game1' : 'NFS',
//     'Game2' : 'GTAV'
// }
// for (const [key, value] of MyObj) {
//     console.log(key, ':--', value);
    
// }
