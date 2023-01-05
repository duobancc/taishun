// hasOwnProperty

var obj = {
  name: 'duoban',
  age: 19
}

var newObj = Object.create(obj)
newObj.title = 'hhhh'
Object.defineProperty(newObj, 'title2', {
  configurable: true,
  writable: true,
  enumerable: false,
  value: 'hello'
})
console.log(newObj.hasOwnProperty('name')) // false
console.log(newObj.hasOwnProperty('title')) // true 

// in / for in 

console.log('in：', 'name' in newObj)
console.log('in：', 'title' in newObj)
let keys = []
for (const key in newObj) {
  keys.push(key)
  // console.log(key) // all key
}
console.log(keys.toString())
console.log('-------------------------------------------------')

function Person() {}
function Student() {}
Student.prototype = Object.create(Person.prototype)

function Other() {}

var oth = new Other()

var obj = new Student()
console.log(obj instanceof Student) // true
console.log(obj instanceof Person) // true 
console.log(obj instanceof Object) // true
console.log(obj instanceof Other) // false

console.log('-------------------------------------------------')

console.log(Person.prototype.isPrototypeOf(obj)) // true
console.log(Student.prototype.isPrototypeOf(obj)) // true
console.log(Other.prototype.isPrototypeOf(obj)) // false
console.log(Other.prototype.isPrototypeOf(oth)) // true
console.log(Object.prototype.isPrototypeOf(oth)) // true








