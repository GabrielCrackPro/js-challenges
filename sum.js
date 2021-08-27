// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum

const sum = (n1,n2) => {
if(n1 == n2) return (n1 + n2) * 3
return n1 + n2
} 

console.log(sum(10,5))
console.log(sum(1,1))
