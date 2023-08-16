let objArr = [
    {
        item: `milk`,
        price: 5.99
    },
    {
        item: `eggs`,
        price: 8.99
    },
    {
        item: `cheese`,
        price: 6.99
    },
    {
        item: `ham`,
        price: 6.99
    },
    {
        item: `begal`,
        price: 7.99
    }
]



// for Each method //
objArr.forEach((foodObj, index, array) => {
    // console.log(foodObj, `The index of this object is ${index}`)
    let {item, price} = foodObj
    // console.log(`the item at index ${index} os ${item} with a price of ${price}`)
})



// Map method //
let modernGroceries = objArr.map((foodObj, index, array) => {
    let inflation = .25
    let {price} = foodObj
    price = price + (price * inflation)
    return {...foodObj, price: parseFloat(price.toFixed(2))}
})
// console.log(modernGroceries)


// filter method //
let expensiveGroceries = modernGroceries.filter((foodObj) => foodObj.price > 9)
// console.log(expensiveGroceries)


// reduce method //
let expensivePrice = expensiveGroceries.reduce((acc,curr) => {
    // JSON.stingify() makes into string
    // console.log(`The accumulator value is ${acc} \nOur current loop value is ${JSON.stringify(curr)}`)
    let {price} = curr
    return acc + price
}, 0)
// console.log(`The most expensive item in the groceries has a total of ${expensivePrice}`)


let wallet = modernGroceries.reduce((acc, foodObj) => {
    let {price} = foodObj
    return acc - price
},100)
// console.log(`after our grocery trip, owe have $${wallet} left in our wallet`)