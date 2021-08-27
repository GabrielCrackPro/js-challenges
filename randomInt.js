// Write a JavaScript function to generate a random integer.

const rand = (min,max) => {
return Math.floor(Math.random() * (max - min) + min)
}

console.log(rand(0,100))
console.log(rand(1,34))
