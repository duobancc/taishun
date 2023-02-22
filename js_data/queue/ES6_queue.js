let Queue = (function () {
  const items = new WeakMap()

  class Queue {
    constructor() {
      items.set(this, []);
    }
    enqueue(element) {
      let q = items.get(this);
      q.push(element);
    }
    dequeue() {
      let q = items.get(this);
      let r = q.shift();
      return r;
    }

    print() {
      console.log(items.get(this).toString())
    }
  }
  return Queue
})()


const queue = new Queue()

queue.enqueue(797979)
queue.print()



