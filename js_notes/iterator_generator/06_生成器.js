/**
 * 生成器
 * 生成器是ES6 新增的一种函数控制、使用的方案，
 * 灵活的控制函数什么时候继续执行、暂停执行
 */

/**
 * 生成器函数
 * 也是一个函数
 * 返回一个生成器（Generator）一个特殊的迭代器
 */

function getData(params) {
  return new Promise((resolve, reject) => {
    resolve('sucess@' + params)
  })
}


function* foo() {
  console.log('函数开始执行')
  const value1 = 333
  console.log('value1', value1)
  const y1 = yield value1
  console.log('y1', y1)

  const y3 = yield getData(y1)

  yield y3
  console.log('y3', y3)
  console.log('函数执行结束')
}

const generator = foo()

console.log('generator.next()', generator.next(100))
console.log('generator.next()', generator.next(200))
console.log('generator.next()', generator.next(300))
console.log('generator.next()', generator.next())
