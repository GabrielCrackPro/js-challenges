// Write a function named "evenlyDivide" that accepts an INTEGER.
// Return an array filled with numbers that evenly divide into the target number

const evenlyDivide = (num) => {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) arr.push(i);
  }
  return arr;
};

console.log(evenlyDivide(10));
console.log(evenlyDivide(34));
console.log(evenlyDivide(100));
