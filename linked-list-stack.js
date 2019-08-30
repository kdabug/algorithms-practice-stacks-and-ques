//LINKED LIST STACK
class Node {
  constructor(value) {
    //node properties
    this.value = value;
    this.next = null;
  }
}

class LinkedListStack {
  constructor() {
    //stack properties
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    //look at top item in the stack
    return this.top;
  }
  push(value) {
    //add to stack

    //create a new node
    const newNode = new Node(value);

    //check if first node in stack
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdPointer = this.top;
      this.top = newNode;
      this.top.next = holdPointer;
    }

    this.length++;
    return this;
  }
  pop() {
    //remove item from top of stack
    if (!this.top) {
      return null;
    }
    //need to remove the bottom property
    //once the stack has only one value left;
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    //const holdPointer = this.top;
    //console.log('i am removing this node', holdPointer)
    this.top = this.top.next;
    this.length--;

    return this;
  }
  isEmpty() {
    //check if stack is empty
    return this.length === 0;
  }
}

//check if Stack works
const myStackLinkedList = new LinkedListStack();
myStackLinkedList.push("winnie");
myStackLinkedList.push("buddy");
myStackLinkedList.push("george");
myStackLinkedList.push("thaisa");
// myStackLinkedList.peek();
myStackLinkedList.pop();
console.log("myStackLinkedList", myStackLinkedList);
