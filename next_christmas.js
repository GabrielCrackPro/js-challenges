// Write a JavaScript program to calculate days left until next Christmas.

const today = new Date()
const cmas = new Date(today.getFullYear(),11,25)

if(today.getMonth() == 11 && today.getDay() > 25){
cmas.setFullYear(cmas.getFullYear() + 1)
}
const day = 1000 * 60 * 60 * 24

const days_left = Math.ceil(cmas.getTime() - today.getTime()) / day

console.log(`${days_left} days before christmas`)
