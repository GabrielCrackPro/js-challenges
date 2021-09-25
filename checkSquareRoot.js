// Write a function named "squareRoot" that checks if the parameter passed in is a square root.
// A square root is a number that is the square of an integer.

const checkSquareRoot = (num) => {
  return num % Math.sqrt(num) === 0;
};

console.log(checkSquareRoot(9)); // true
console.log(checkSquareRoot(10)); // false
console.log(checkSquareRoot(25)); // true
