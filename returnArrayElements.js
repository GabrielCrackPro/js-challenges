// Write a JavaScript function to get the first element of an array.
// Passing a parameter 'n' will return the first 'n' elements of the array

const returnArrElements = (arr,n) => {
if(n == null) return arr[0]
return arr.slice(0,n)
}

console.log(returnArrElements([1,2,3,4,5],2))
