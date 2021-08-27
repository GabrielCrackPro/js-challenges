// Write a JavaScript function to test if a number is a power of 2.

const powerOfTwo = (n) => {
return n && (n & (n - 1)) == 0
}

console.log(powerOfTwo(4))
console.log(powerOfTwo(5))
console.log(powerOfTwo(8))
