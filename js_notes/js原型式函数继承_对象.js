var obj = {
  name: 'nick',
  age: 18
}

var info = {}

// 让info 的原型为 obj

//1. 原型式继承函数
function createObject(o) {
  function fn() { }
  fn.prototype = o
  const newObj = new fn
  return newObj
}

//2. es6 
function createObject2(o) {
  const newObj = {}
  Object.setPrototypeOf(newObj, o)
  return newObj
}

//3 es6 +
info = Object.create(obj)

// info = createObject(obj)
// info = createObject2(obj)

console.log(info)  
console.log(info.__proto__)
