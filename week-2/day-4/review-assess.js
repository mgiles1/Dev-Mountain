////////// For Each method with array /////////
let arr = [
    {
        name: `Pizza`,
        price: 11.99
    },
    {
        name: `Hotdog`,
        price: 5.99
    },
    {
        name: `Lobser`,
        price: 28.99
    },
    {
        name: `sushi`,
        price: 13.99
    },
    {
        name: `salad`,
        price: 8.99
    }
]

arr.forEach((foodObj) => {
    if(foodObj.price > 10) {
        foodObj.cheap = false
    } else {
        foodObj.cheap = true
    }
})
// console.log(arr)


/////////// Map Functions //////////
   
    //map funtions change everything in the array
let inflationPrices = arr.map((foodObj) => {
    //below is an example of destructuring "let {} = ''"
    let {price} = foodObj;
    newPrice = price + (price * .25);
    // to change a key, add the comma like below
    return {...foodObj, price: newPrice}
})

 
////////// Spread Operators //////////
    // returns exact copy or array
let numArrOne = [1,2,3,4,5]
let numArrTwo = [6,7,8,9,10]
let combinedArr = [...numArrOne, ...numArrTwo]

// console.log(combinedArr)


////////// Filter //////////

let expensiveFoods = inflationPrices.filter((foodObj) => foodObj.cheap === false)
// console.log(expensiveFoods)


////////// Reduce //////////
    //reduce takes in a function and a starting value
let expensiveTotal = expensiveFoods.reduce((acc, curr) => {
    let {price} = curr
    return acc + price
}, 0)
// console.log(expensiveTotal)


////////// For Loops //////////

for(let i = 0; i < arr.length; i++) {
    for(let key in arr[i]) {
        if(key === `cheap`) {
            arr[i][key] = false
        }
    }
}

// console.log(arr)