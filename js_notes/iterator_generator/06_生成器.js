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


function* foo() {
  console.log('函数开始执行')

  const value1 = 300
  console.log('value1', value1)
  yield

  const value2 = 999
  console.log('value2', value2)
  yield

  const value3 = 555
  console.log('value3', value3)
  yield

  console.log('函数执行结束')
}

const generator = foo()

generator.next()
generator.next()
generator.next()
generator.next()
