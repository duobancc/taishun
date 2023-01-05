function myCompose(...fns) {
  const length = fns.length
  return function compose(...args) {
    let index = 0
    let res = length ? fns[index].apply(this, args) : args
    while(++index < length){
      res = fns[index].call(this, res)
    }
    return res 
  }

}

function double(num) {
  return num * 2
}

function square(num) {
  return num ** num
}

const newFn = myCompose(double, square)

console.log(newFn(2))