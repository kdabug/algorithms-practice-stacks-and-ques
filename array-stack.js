//STACKS - ARRAY

class ArrayStack {
  constructor() {
    //stack properties
    this.array = [];
  }
  //stack methods
  peek() {
    //look at the top value
    return this.array[this.array.length - 1];
  }
  push(value) {
    //add data the top of the stack
    this.array.push(value);
  }
  pop() {
    //remove data from the top of the stack
    this.array.pop();
  }
  isEmpty() {
    //check if stack is empty
    return this.array.length == 0;
  }
}

//check if Stack works
const myArrayStack = new ArrayStack();
myArrayStack.push("winnie");
myArrayStack.push("buddy");
myArrayStack.push("george");
myArrayStack.push("thaisa");
// myArrayStack.peek();
myArrayStack.pop();
console.log("myArrayStack", myArrayStack);
