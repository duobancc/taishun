function sum(...nums) {
  nums.forEach(num => {
    if (typeof num !== 'number') {
      throw '参数必须为Number类型'
    }
  })

  return nums.reduce((prev, curr) => {
    return prev + curr
  }, 0)
}

// const res = sum(100, 33, 9, 8, 'jjj')
// const res = sum(100, 33, 9, 8)
// console.log('res', res)



function foo(type) {
  if (type === 0) {
    // 抛出对象
    // throw {
    //   errorCode: -1001,
    //   errorMessage: 'type不能为0'
    // }

    // 抛出Error类

    throw new Error('type不能为0')

  }

  return type
}

 
function fbb() {
  try {
    foo(0)
  } catch (error) {
    console.log('error', error.message)
  } finally {
    console.log('都会执行')
  }
}

fbb()