class Node {
     constructor(data) {
          this.data = data;
          this.next = null;
     }
}
class Stack {
     constructor() {
          this.top = null;
     }
     isEmpty() {
          return this.top === null;
     }
     push(data) {
          let newNode = new Node(data);
          newNode.next = this.top;
          this.top = newNode;
     }
     pop() {
          if (this.top === null) {
               return "Stack Underflow"
          }
          let popped = this.top.data;
          this.top = this.top.next;
          return popped;
     }
     peek() {
          if (this.top === null) {
               return "Stack is Empty"
          }
          return this.top.data
     }
     display() {
          if (this.top === null) {
               return "Stack is Empty"
          }
          let temp = this.top;

          while (temp !== null) {
               console.log(temp.data);
               temp = temp.next;
          }
     }
     size() {

          let temp = this.top;
          let count = 0;
          while (temp !== null) {
               count++
               temp = temp.next;
          }
          return count;
     }
}

let s = new Stack();

console.log("Initial isEmpty:", s.isEmpty()); // true

s.push(10);
s.push(20);
s.push(30);

console.log("After pushes:");
s.display(); // Stack: 30, 20, 10

console.log("Peek:", s.peek()); // 30
console.log("Pop:", s.pop());   // 30

console.log("After pop:");
s.display(); // Stack: 20, 10

console.log("Size:", s.size()); // 2
console.log("Final isEmpty:", s.isEmpty()); // false