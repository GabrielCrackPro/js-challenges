 // Give the number that isn't in the array

const makeArrConsecutive = (arr) => {
 const length = arr.length
 let diff = 0
 statues.sort(a,b => (a - b))
 for(let i = 0; i <= length; i++){
   diff += arr[i] - arr[i + 1] + 1
 }
 return Math.abs(diff)
}

// Example:
// [6,2,3,8] => 3
//  => [4,5,7]
