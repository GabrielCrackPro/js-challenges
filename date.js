// Write a JavaScript program to get the current date.

const date = {
 day: new Date().getDate().toLocaleString(),
 month: new Date().getMonth().toLocaleString(),
 year: new Date().getFullYear().toLocaleString()
}

console.log(`Date: ${date.day}-${date.month}-${date.year}`)
