let arr = [1,2,3,4,5]

let [one, two, three, four, five] = arr
// console.log(one + five)

let obj = {
    name: "Magdaline",
    age: 34,
    eyeColor: "Brown",
    hairColor: "Brown",
    height: `5'8"`
}

// console.log(Object.entries(obj))
// console.log(Object.entries(obj)[2])
// for(let[key, value] of Object.entries(obj)){
//     console.log(key, value)
// }

let objArr = [
    {
        name: "Magdaline",
        age: 34,
        eyeColor: "Brown",
        hairColor: "Brown",
        height: `5'8"`
    },
    {
        name: "Charlie",
        age: 28,
        eyeColor: "Green",
        hairColor: "Brown",
        height: `6'0"`
    },
    {
        name: "Yousef",
        age: 41,
        eyeColor: "Blue",
        hairColor: "Red",
        height: `5'10"`
    }
]

objArr.map(({name, age, eyeColor, hairColor, height}) => {
    // console.log(`
    // ${name}
    // ${age}
    // ${eyeColor}
    // ${hairColor}
    // ${height}
    // `)
})


Object.entries(obj).map(([key, value]) => {
    // console.log(`${value} is the ${key}`)
})
// ! both do same thing, just different ways of writing
for(let key in obj) {
    // console.log(`${obj[key]} is the ${key}`)
}