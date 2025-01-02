// ====================for each loop====================
// const coding = ["js", "ruby", "java", "python", "c++"]
// const values = coding.forEach( (item)=>{
//     console.log(item);
//     return item
    
// } )
// console.log(values);





//================FILTERS=====================
// const MyNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = MyNums.filter((num) => num>4)     
// console.log(newNums);






// const MyNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = []
// MyNums.forEach( (num) => {
//     if (num>4) {
//         newNums.push(num)
        
//     }
// } )
// console.log(newNums);




//=====================FILTERS=================================

const books = [
    {
        title: 'Book One',
        genre: 'Fiction',
        Publish: 1981,
        edition: 2004
    },

    {
        title: 'Book Two',
        genre: 'Non-Fiction',
        Publish: 1992,
        edition: 2008
    },

    {
        title: 'Book Three',
        genre: 'History',
        Publish: 1999,
        edition: 2007
    },

    {
        title: 'Book four',
        genre: 'Non-Fiction',
        Publish: 1989,
        edition: 2010
    },

    {
        title: 'Book five',
        genre: 'Science',
        Publish: 2009,
        edition: 2014
    },

    {
        title: 'Book Six',
        genre: 'Fiction',
        Publish: 1987,
        edition: 2010
    },

    {
        title: 'Book Seven',
        genre: 'History',
        Publish: 1986,
        edition: 1996
    },

    {
        title: 'Book Eight',
        genre: 'Science',
        Publish: 2011,
        edition: 2016
    },

    {
        title: 'Book Nine',
        genre: 'Non-Fiction',
        Publish: 1981,
        edition: 1989
    },
];
    // let UserDesiredBooks = books.filter((bk) => bk.genre === 'History')
    let UserDesiredBooks = books.filter((bk) => {return bk.Publish >= 2000}) 
    // when ever we use curly braces(scope) we have to use return kryword

    console.log(UserDesiredBooks);
