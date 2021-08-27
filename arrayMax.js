// Write a JavaScript function to find the highest value in an array.

const max = (arr) => {
return Math.max.apply(null, arr)
}

let arr = [1,2,3,4]
console.log(max(arr))
