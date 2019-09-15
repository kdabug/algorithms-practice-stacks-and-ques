//STACK - LINKED LIST

class Node {
  //using a linked list style node
  //thus this will be our Linked List Stack
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListStack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    //return top item in the stack
    console.log("hey you're peeking at", this.top);
    return this.top;
  }
  push(value) {
    //add to stack

    //create new Node
    const newNode = new Node(value);

    //check if this is the first item pushed in the stack
    //if it is first item, set top and bottom Stack properties
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      //value is not first node added to stack
      //replace top item with value
      //add link to previous top item
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    //add to length
    this.length++;
    return this;
  }
  pop() {
    //if there is no top item, return null
    if (!this.top) {
      return null;
    }
    //need to remove the bottom property
    //once the stack has only one value left;
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const holdingPointer = this.top;
    //return holdingPointer
    this.top = this.top.next;
    this.length--;
    return this;
  }
  isEmpty() {
    //check if Stack is empty
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
// myStackLinkedList.pop();
console.log("myStackLinkedList", myStackLinkedList);
