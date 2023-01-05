var obj = {
  name: 'nick_yang',
  _address: '北京市',
  _age: 18,
  get age() {
    return this._age
  },
  set age(value) {
    this._age = value
  }
}

// Object.defineProperty(obj, 'age', {
//   value: 18,
//   // 是否可写入值(默认false)
//   writable: true,
//   // 不可删除,重新定义属性描述符
//   configurable: true,
//   //配置对应的属性是否可被枚举
//   enumerable: true,
// })

Object.defineProperty(obj, 'address', {
  configurable: true,
  enumerable: false,
  get: function () {
    return this._address
  },
  set: function (value) {
    this._address = value
  }
})

console.log(obj.address)
obj.address = '上海市'
console.log(obj.address)

Object.defineProperties(obj, {
  name: {
    writable: true,
    configurable: true
  },
  address: {
    configurable: false
  }
})

console.log(obj)

console.log(Object.getOwnPropertyDescriptors(obj))

Object.preventExtensions(obj) // 对象不允许拓展（添加属性）

Object.seal(obj) // 对象所有属性不可配置

Object.freeze(obj) // 对象不可修改



