const obj = {
  name: 'duoban',
  age: 25
}

const objProxy = new Proxy(obj, {

  get: function (target, key) {
    // return target[key]
    return Reflect.get(target, key)
  },
  set: function (target, key, newValue) {
    // target[key] = newValue
    Reflect.set(target, key, newValue)
  },
})

console.log(objProxy.name) 
objProxy.name = 'nan'
console.log(objProxy.name)


