// Write a function that accepts an ARRAY or a STRING as an input and returns the last item.

const arrayLast = (arrOrStr) => {
  return arrOrStr[arrOrStr.length - 1];
};

console.log(arrayLast([1, 2, 3, 4, 5]));
console.log(arrayLast("hello"));
console.log(arrayLast(["bye", "goodbye", "goodnight"]));
