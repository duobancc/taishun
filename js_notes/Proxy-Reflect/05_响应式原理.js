
let activeFn = null

class Depend {
  constructor() {
    this.reactiveFns = []
  }

  addDepend(fn) {
    this.reactiveFns.push(fn)
  }

  depend() {
    if (activeFn) {
      if (this.reactiveFns.length > 0) {
        if (activeFn === this.reactiveFns[0]) {
          return console.log('重复的方法')
        }
      }
      this.addDepend(activeFn)
    }
  }


  notify() {
    this.reactiveFns.forEach(fn => fn())
  }
}

const obj = {
  name: 'duoban',
  age: 25
}



function watchFn(fn) {
  activeFn = fn
  fn()
  activeFn = null
}


const targetMap = new WeakMap()
function getDepend(target, key) {
  let map = targetMap.get(target)
  if (!map) {
    map = new Map()
    targetMap.set(target, map)
  }

  let depend = map.get(key)
  if (!depend) {
    depend = new Depend()
    map.set(key, depend)
  }
  return depend
}

const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    const currentDepend = getDepend(target, key)
    currentDepend.depend()
    return Reflect.get(target, key, receiver)
  },
  set: function (target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
    const currentDepend = getDepend(target, key)
    currentDepend.notify()
  }
})


watchFn(function () {
  console.log('obj.name111', objProxy.name)
  console.log('obj.name222', objProxy.name)
})


watchFn(function () {
  console.log('obj.age', objProxy.age)
  console.log('-----------------------------')
})



objProxy.name = 'sask'
objProxy.name = 'ssdfdafd'
