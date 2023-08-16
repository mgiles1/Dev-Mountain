let arr = [1,4,11,2,37,-4]

let lowest = arr[0]
let highest = arr[0]

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    if(arr[i] < lowest){
        lowest = arr[i]
    }
    if(arr[i] > highest || highest === undefined) {
        highest = arr[i]
    }
}
    console.log(`inside the array ${arr}, the lowest value is ${lowest} and the highest value is ${highest}`)