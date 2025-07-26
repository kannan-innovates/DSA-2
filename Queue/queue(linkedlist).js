class Node {
     constructor(data) {
          this.data = data;
          this.next = null;
     }
}
class Queue {
     constructor() {
          this.front = null;
          this.rear = null;
     }
     isEmpty() {
          return this.front === null;
     }
     enqueue(data) {
          let newNode = new Node(data);

          if (this.isEmpty()) {
               this.front = this.rear = newNode;

          } else {
               this.rear.next = newNode;
               this.rear = newNode;
          }
     }
     dequeue() {
          if (this.isEmpty()) {
               return "Queue is Underflow";
          }
          let removed = this.front.data;

          this.front = this.front.next;

          if (this.front === null) {
               this.rear = null;
          }
          return removed;
     }
     peek() {
          if (this.isEmpty()) {
               return "Queue Underflow";
          }
          return this.front.data;
     }

     display() {
          if (this.isEmpty()) {
               return "Queue is Underflow";
          }
          let temp = this.front;

          while (temp !== null) {
               console.log(temp.data);
               temp = temp.next;
          }
     }
     size() {
          let temp = this.front;
          let count = 0;

          while (temp !== null) {
               count++;
               temp = temp.next;
          }
          return count;
     }
}

let q = new Queue();

console.log("Initial isEmpty:", q.isEmpty()); // true

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

console.log("Peek:", q.peek()); // 10

console.log("After enqueue:");
q.display(); // 10, 20, 30

console.log("Dequeued:", q.dequeue()); // 10

console.log("After dequeue:");
q.display(); // 20, 30

console.log("Size:", q.size()); // 2
console.log("IsEmpty:", q.isEmpty()); // false