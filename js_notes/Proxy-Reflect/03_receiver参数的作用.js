const obj = {
  _name: 'why',
  get name() {
    console.log('I‘m free')
    return this._name
  },
  set name(newValue) {
    console.log('set')
    this._name = newValue
  },
  age: 16,
}

const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    console.log('key:', key)
    // receiver 改变了this的指向，(get中)
    return Reflect.get(target, key, receiver)
  },
  set: function (target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
  }
})

objProxy.age = 18
console.log(objProxy.age)
