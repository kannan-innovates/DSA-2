class CircularQueue {
     constructor(size) {
          this.size = size;
          this.queue = new Array(size);
          this.front = -1;
          this.rear = -1
     }
     isFull() {
          return (this.rear + 1) % this.size === this.front;
     }
     isEmpty() {
          return this.front === -1
     }
     enqueue(element) {
          if (this.isFull()) {
               return "Queue Overflow";
          }
          if (this.isEmpty()) {
               this.front = 0;
          }
          this.rear = (this.rear + 1) % this.size;
          this.queue[this.rear] = element;
     }
     dequeue() {
          if (this.isEmpty()) {
               return "Queue Underflow";
          }
          let removed = this.queue[this.front];

          if (this.front === this.rear) {
               this.front = -1;
               this.rear = -1;
          } else {
               this.front = (this.front + 1) % this.size;
          }
          return removed;
     }
     peek() {
          if (this.isEmpty()) {
               return "Queue is Empty!";
          }
          return this.queue[this.front];
     }
     display() {``
          let i = this.front;
          while (true) {
               console.log(this.queue[i]);
               if (i === this.rear) break;
               i = (i + 1) % this.size;
          }
     }
}
let cq = new CircularQueue(5);

cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);
cq.display(); // 10 20 30 40

console.log("Dequeued:", cq.dequeue()); // 10

cq.enqueue(50); // Should insert at freed spot
cq.display(); // 20 30 40 50
