// Write a JavaScript function that reverse a number

const reverseNumber = (n) => {
return Number(n.toString().split('').reverse().join(''))
}

console.log(21,reverseNumber(21))
console.log(34,reverseNumber(34))
