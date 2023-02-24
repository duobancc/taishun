function LinkedList() {
  // 要加入列表的项
  let Node = function (el) {
    this.el = el
    this.next = null // 下一个节点的指针
  }

  let length = 0 // 列表项数量
  let head = null // 存储节点

  this.append = function (el) {
    let node = new Node(el), current;
    if (head === null) { // 存储列表的第一个节点
      head = node;
    } else { // 追加节点 
      current = head;

      while (current.next) { // 如果next不为空
        current = current.next // 将最后一项引用指向current
      }

      // 将新的节点链接到最后一项
      current.next = node
    }
    length++ // 更新列表长度
  }
  this.insert = function (position, el) {
    if (position > -1 && position < length) {
      let node = new Node(el), current = head, previous, index = 0;
      if (position === 0) { // 头部添加
        node.next = current;
        head = node;
      } else {
        while (position > index++) {
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
      }
      length++
      return true
    } else {
      return false
    }
  }

  this.removeAt = function (position) {
    // 检查越界值
    if (position > -1 && position < length) {
      let current = head, previous, index = 0;
      if (position === 0) { // 第一项处理
        head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        // 将previous 与 current的下一项链接起来，从而移除，current项
        previous.next = current.next
      }
      length--;
      return current.el;
    } else {
      return null;
    }
  }

  this.remove = function (el) {
    let index = this.indexOf(el)
    return this.removeAt(index)
  }

  this.indexOf = function (el) {
    let current = head, index = 0;
    while (current) {
      if (el === current.el) {
        return index
      }
      index++
      current = current.next
    }

    return -1
  }

  this.isEmpty = function () {
    return length === 0;
  }

  this.size = function () { 
    return length
  }
  this.getHead = function () { 
    return head
  }
  this.toString = function () {
    let current = head, string = '';
    while (current) {
      string += current.el + (current.next ? '\t' : '')
      current = current.next
    }
    return string
  }
  this.print = function () { }

}


const linkList = new LinkedList()
const a = 'index--3'
linkList.append('index-0')
linkList.append('index-1')
linkList.append('index-2')
linkList.append(a)
// linkList.removeAt(1)
// linkList.insert(2, a)
console.log(linkList.toString())
console.log(linkList.indexOf(a))
console.log(
  linkList.remove(a)
)

