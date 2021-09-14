// Find the area of a polygon of n sides

const shapeArea = (n) => {
 if(n == 1) return 1
 return shapeArea(n - 1) * ((n - 1) * 4)
}

console.log(shapeArea(3))

// Examples:
// n = 1 => 1
// n = 2 => 5 => 1 + (1 * 4)
// n = 3 => 13 => 1 + (1 * 4) + (2 * 4)
