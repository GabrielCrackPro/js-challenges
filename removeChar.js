//  Write a JavaScript program to remove a character at the specified position of a given string and return the new string

const removeChar = (str,pos) => {
let part1 = str.substr(0,pos)
let part2  = str.substr(pos + 1, str.length)

return part1 + part2
}

console.log(removeChar('Hello',0))
console.log(removeChar('Goodbye',1))
