/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val)
    if (this.first != null) {
      let current = this.first
      while (current.next !== null) {
        current = current.next
      }
      current.next = newNode
    } else {
      this.first = newNode
    }
    this.last = newNode
    this.size += 1
    return undefined
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    try {
      let current = this.first
      this.first.next = this.first.next ? this.first.next : null
      this.size -= 1
      return current.val
    } catch (error) {
      throw error
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.size == 0) {
      throw ("Nothing in queue")
    }
    return this.first.val
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return Boolean(this.size == 0)
  }
}

module.exports = Queue;
