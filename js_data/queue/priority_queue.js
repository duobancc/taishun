function PriorityQueue() {
  let items = []

  function QueueElement(el, priority) {
    this.el = el
    this.priority = priority
  }

  this.enqueue = function (el, priority) {
    let queueEl = new QueueElement(el, priority)
    let added = false;
    for (let i = 0; i < items.length; i++) {
      // 插入的如果比当前item的优先级高,
      if (queueEl.priority < items[i].priority) {
        items.splice(i, 0, queueEl) // 在当前item位置插入新的item,当前item后移
        added = true
        break
      }
    }
    if (!added) { //普通优先级item添加(普通队列添加)
      items.push(queueEl)
    }
  }

  this.print = function () {
    for (let i = 0; i < items.length; i++) {
      console.log(`${items[i].el}-${items[i].priority}`)
    }
  }

}

const pQueue = new PriorityQueue()
pQueue.enqueue(666, 2)
pQueue.enqueue(8989, 1)
pQueue.print()


