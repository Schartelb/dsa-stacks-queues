/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val)
    if (this.size == 0) {
      this.last = newNode
    } else {
      let current = this.first
      newNode.next = current
    }
    this.first = newNode
    this.size += 1
    return undefined
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    try {
      let current = this.first
      this.first = this.first.next
      this.size -= 1
      return current.val
    } catch (error) {
      throw error
    }
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    try {
      return this.first.val
    } catch (error) {
      throw error
    }
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return (!Boolean(this.size))
  }
}

module.exports = Stack;
