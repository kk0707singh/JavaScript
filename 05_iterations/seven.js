//=======================MAPS===========================

const MyValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newValues = MyValues.map( (num) => num + 10 )

const newValues = MyValues
                .map((MyValues) => MyValues*10)
                .map((MyValues) => MyValues+1)
                .filter((MyValues) => MyValues >=40)
console.log(newValues);


