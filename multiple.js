// Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.

const checkMultiple = (n) => {
if(n % 3 == 0) return `${n} is multiple of 3`
if(n % 7 == 0) return `${n} is multiple of 7`
if(n % 3 == 0 && n % 7 == 0) return `${n} is multiple of 3 and 7`
}

console.log(checkMultiple(3))
console.log(checkMultiple(9))
console.log(checkMultiple(7))
