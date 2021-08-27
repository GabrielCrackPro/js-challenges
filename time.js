// Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 : 30 : 38

const day = new Date().getDay()
const time = {
 hours: new Date().getHours(),
 minutes: new Date().getMinutes(),
 seconds: new Date().getSeconds()
}

console.log(`Today is: ${day}`)
console.log(`Current time is: ${time.hours}:${time.minutes}:${time.seconds}`)
