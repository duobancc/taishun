function Queue() {
  let items = []

  // 入列
  this.enqueue = function (el) {
    items.push(el)
  }

  // 出列
  this.dequeue = function () {
    return items.shift()
  }

  this.front = function(){
    return items[0]
  }

  this.isEmpty = function () {
    return !items.length
  }

  this.size = function () {
    return items.length
  }

  this.print = function(){
    console.log(items.toString());
  }
}



