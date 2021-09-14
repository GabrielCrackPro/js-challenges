// Given an array of intergers find the pair of adjacent element that has the largest product and return the product.

const getLargestProduct = (arr) => {
let largestProduct = arr[0] * arr[1]
for(let i = 1; i <= arr.length - 1; i++){
 const actualProduct = arr[i] * arr[i + 1]
 if(actualProduct > largestProduct) largestProduct = actualProduct
}
return largestProduct
}

console.log(getLargestProduct([3,6,-2,-5,7,3]))

// Example - [3,6,-2,-5,7,3] => 21

