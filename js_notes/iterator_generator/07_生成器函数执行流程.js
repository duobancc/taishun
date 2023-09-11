/**
 * 生成器函数
 * 当遇到yield 时暂停执行
 * 当遇到return 时停止执行
 */
function* foo() {
  console.log('函数开始执行')

  const value1 = 300
  console.log('value1', value1)
  // 碰到return 结束迭代（把return看成特殊的yield）
  // return value1
  // yield 暂停执行
  const m = yield value1
  const value2 = 999
  console.log('value2', value2)
  const n = yield value2
  console.log('n', n, m)

  const value3 = 555
  console.log('value3', value3)
  yield value3

  console.log('函数执行结束')
}

const generator = foo()
console.log('返回值1', generator.next(888))
// console.log('返回值2', generator.next(999))
// console.log('返回值3', generator.next())

