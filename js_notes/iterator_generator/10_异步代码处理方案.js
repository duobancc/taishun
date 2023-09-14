function requestData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url)
    }, 200);
  })
}

// requestData('get').then(res => {
//   console.log('res', res)
// })

function* getData() {
  const res1 = yield requestData('abu')
  const res2 = yield requestData(res1 + '002')
  const res3 = yield requestData(res2 + '003')
  console.log('res3', res3)
}


const generator = getData()

// 一
// generator.next().value.then(res => {
//   generator.next(res).value.then(res => {
//     generator.next(res).value.then(res => {
//       generator.next(res)
//     })
//   })
// })

// 二 对上述封装的自动化函数

// function execGenerator(genFn) {
//   const generator = genFn()
//   function exec(res) {
//     const result = generator.next(res)
//     if (result.done) {
//       return result.value
//     }
//     result.value.then(res => exec(res))
//   }
//   exec()
// }
// execGenerator(getData)


// 三 async await
async function getData3() {
  const res1 = await requestData('abu')
  console.log('res1', res1)
  const res2 = await requestData(res1 + '002')
  const res3 = await requestData(res2 + '003')
  return res3
}

console.log('getdata3', getData3().then(res => {
  console.log('res', res)
}))



