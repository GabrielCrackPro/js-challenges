// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

const sum = (n1,n2) => {if(n1 == 50 || n2 == 50 || n1 + n2 == 50 ) return true}

console.log(sum(1,49))
console.log(sum(1,50))

