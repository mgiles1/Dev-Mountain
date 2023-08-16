let luckyNum = (n) =>{
var arr = [];
while(arr.length < n){
    let randInt = Math.ceil(Math.random() * 10)
    if(!arr.includes(randInt)){
        arr.push(randInt)
    }
     arr.push(randInt);
    }
    return arr
}
console.log(luckyNum)