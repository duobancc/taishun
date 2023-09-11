const names = ['aaa', 'bbb', 'ccc']
const nums = [123, 456, 789]

function createArrayIterator(arr) {
  let index = 0
  return {
    next: function () {
      if (index < arr.length) {
        return {
          done: false, value: arr[index++]
        }
      } else {
        return {
          done: true
        }
      }
    }
  }
}

const numsIterator = createArrayIterator(nums)
console.log('nums', numsIterator.next())
console.log('nums', numsIterator.next())
console.log('nums', numsIterator.next())
console.log('nums', numsIterator.next())