// Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

const sign = (x, y) => {
return ((x < 0 && y > 0) || x > 0 && y < 0) 
}

console.log(sign(3,3))
console.log(sign(5,-5))
console.log(sign(-2,-2))
