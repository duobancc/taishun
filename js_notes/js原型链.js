var obj = {
  name: 'test'
}

Object.prototype.address = 'Object.address'

obj.__proto__ = {
 
}

console.log(obj.address)
