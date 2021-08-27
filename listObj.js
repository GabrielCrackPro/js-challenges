// Write a JavaScript program to list the properties of a JavaScript object.

const listProps = (obj) => {
return Object.keys(obj)
}

const obj = {
 name: 'peter',
 id: '0'
}

console.log(listProps(obj))
