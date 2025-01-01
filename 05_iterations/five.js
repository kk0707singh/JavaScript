// ===============for each loop==================
// const coding = ["js", "python", "css", "cpp"]
// coding.forEach( function(items) {
//     console.log(items);
    
    
// } )


//=================ALTERNATE TAREEKA====================

const coding = ["js", "python", "css", "cpp"]

// coding.forEach( (items) => {
//     console.log(items);
    
// } )




// function printMe(item) {
//     console.log(item);
    
// }
// coding.forEach(printMe)




coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
    

} )



const MyCoding = [
    {
        languageName: "javaScript",
        languageExtension: "js"
    },

    {
        languageName: "Python",
        languageExtension: "py"
    },

    {
        languageName: "java",
        languageExtension: "javac"
    }
]

MyCoding.forEach( (item) => {
    console.log(item.languageName, item.languageExtension);
    

} )