// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

const toUpperCase = (str) => {
let firstChar = str.split('')[0].toUpperCase()
let rest = str.substr(1,str.length)
return firstChar + rest
}

console.log(toUpperCase('hi'))
console.log(toUpperCase('goodbye'))
