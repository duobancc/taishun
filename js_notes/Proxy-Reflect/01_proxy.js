const obj = {
  name: 'duoban',
  age: 25
}

const objProxy = new Proxy(obj, {

  get: function (target, key) {
    console.log(target, key)
    return target[key]
  },
  set: function (target, key, newValue) {
    target[key] = newValue
  },
  // 监听in 的捕获器
  has: function (target, key) {
    console.log('in---',target, key)
    return key in target
  },
  deleteProperty: function(target, key){
    delete target[key] 
  },

})

console.log(objProxy.name)
objProxy.name = 'nan'
console.log(objProxy.name)
console.log('name' in objProxy)


