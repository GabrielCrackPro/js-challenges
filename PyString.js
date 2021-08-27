// Write a JavaScript program to create a new string adding "Py" in front of a given string. 
// If the given string begins with "Py" then return the original string.

const checkPy = (str) => {
if(str[0] + str[1] == 'Py') return str; else return `Py${str}`
}

console.log(checkPy('Hello'))
console.log(checkPy('Python'))
