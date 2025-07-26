class Stack {
     constructor() {
          this.stack = [];
          this.top = -1;
     }
     isEmpty() {
          return this.top === -1;
     }
     push(element) {
          this.top++;
          this.stack[this.top] = element;
     }
     pop() {
          if (this.top === -1) {
               return `Stack underflow`
          }

          let popped = this.stack[this.top];
          this.top--;
          return popped;
     }
     peek() {
          if (this.top === -1) {
               return `Stack is empty`;
          }
          return this.stack[this.top];
     }
     display() {
          if (this.top === -1) {
               console.log(`Stack is Empty!`);
          }
          for (let i = this.top; i >= 0; i--) {
               console.log(this.stack[i])
          }
     }
     size() {
          return this.top + 1;
     }
}

let s = new Stack();

console.log("Initial isEmpty:", s.isEmpty()); // true

s.push(10);
s.push(20);
s.push(30);

console.log("After pushes:");
s.display(); // Stack: 30 20 10

console.log("Peek:", s.peek()); // 30
console.log("Pop:", s.pop());   // 30

console.log("After pop:");
s.display(); // Stack: 20 10

console.log("Size:", s.size());       // 2
console.log("Final isEmpty:", s.isEmpty()); // false
