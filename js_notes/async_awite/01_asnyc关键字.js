
// 内部没有加东西，与正常流程一致
async function foo() {
  console.log('001')
  console.log('002')
  console.log('003')
  console.log('004')

  // 返回一个值
  // return '110'

  // 返回thanable
  // return {
  //   then: function (resolve) {
  //     resolve('返回thanable')
  //   }
  // }

  // 返回promise
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('返回promise')
    }, 1000);
  })

}

console.log('006')
// .then 放入微任务中执行
const res = foo().then(res => console.log('res', res))
console.log('res---', res)
console.log('005')
