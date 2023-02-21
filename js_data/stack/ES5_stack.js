function Stack() {
  let items = []

  this.push = function (el) {
    items.push(el)
  }

  this.pop = function () {
    return items.pop()
  }

  this.peek = function () {
    return items[items.length - 1]
  }

  this.isEmpty = function () {
    return !items.length
  }

  this.clear = function () {
    items = []
  }

  this.size = function () {
    return items.size
  }

  this.print = function(){
    console.log(items.toString());
  }
}

// const stack = new Stack()
// stack.push(555)
// console.log(stack.isEmpty());
// stack.pop()
// console.log(stack.isEmpty());
