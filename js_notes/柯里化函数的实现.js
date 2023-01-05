function sum(x, y, z) {
  return x + y + z
}

function myCurrying(fn) {
  return function curried(...args) {
    // 如果当前传入的参数长度大于等于，目标函数的参数长度，则表示函数可以进行最终的调用
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return function (...args2) {
        // 如果还有剩余参数没有调用完，递归调用改参数的函数，并合并到之前的参数
        return curried.apply(this, [...args, ...args2])
      }
    }
  }
}

console.log(sum(10, 20, 30))

const res2 = myCurrying(sum)
console.log(res2(10)(20)(30))