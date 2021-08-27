// Write a JavaScript program to check whether the last digit of the three given positive integers is same.

const checkLastDigit = (n1,n2,n3) => {return (n1 % 10 == n2 % 10 == n3 % 10)}

console.log(checkLastDigit(11,23,35))
console.log(checkLastDigit(12,52,72))
