let checkPalindrome = (str) => {
    return str === str.split(``).reverse().join(``);
}

console.log(checkPalindrome(`racecar`));
console.log(checkPalindrome(`hello`))

// this code checks whether or not a string is a palindrome or not //

const backAndfront = str => {
    let front = 0
    let back = str.length - 1
    while(front < back) {
        if(str[front] !== str[back]) {
            return false
        }
        front++
        back++
    }
    return true
}

console.log(backAndfront(`racecar`))
console.log(backAndfront(`apple`))