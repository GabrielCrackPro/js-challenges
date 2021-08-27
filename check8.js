// Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8

const check8 = (n1,n2) => {
return (n1 == 8 || n2 == 8)
return (n1 + n2 == 8 || Math.abs(n1 - n2) == 8)
return false
}

console.log(check8(8,9))
console.log(check8(4,4))
console.log(check8(1,2))
