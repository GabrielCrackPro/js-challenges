// Write a JavaScript function that returns a passed string with letters in alphabetical order.

const sortString = (str) => {return str.split('').sort().join('')}

console.log(sortString('javascript'))
console.log(sortString('python'))
