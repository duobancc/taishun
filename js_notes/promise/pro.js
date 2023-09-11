

function getData(params) {
  return new Promise((resolve, reject) => {
    resolve('sucess')
  })
}

getData().then(res => {
  console.log('res', res)
})

// console.log('promiese', Object.getOwnPropertyDescriptors(Promise))

getData().then( res => {
  return new Error('wmkkkkk')
}).catch( err => {
  console.log('err', err)
})
