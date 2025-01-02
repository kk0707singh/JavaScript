// ===================REDUCE=============================

// const MyNums = [1,2,3,4]
// const TotalSum = MyNums.reduce((accumalator, currentValue) => {
//     console.log(`accumalator : ${accumalator} and currentValue : ${currentValue}`);
    
//     return accumalator+currentValue
// },0)
// console.log(TotalSum);





const ShoppingCart = [
    {
        itemName: 'js course',
        price: 2999
    },

    {
        itemName: 'python course',
        price: 1999
    },

    {
        itemName: 'mobile course',
        price: 3999
    },

    {
        itemName: 'dsa course',
        price: 4999
    },
]

const TotalSum = ShoppingCart.reduce((accumalator, item) => accumalator+item.price, 0)
console.log(TotalSum);
