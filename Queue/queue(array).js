class Queue {
     constructor() {
          this.queue = [];
          this.rear = 0;
          this.front = 0;
     }

     isEmpty() {
          return this.rear === this.front;
     }
     enqueue(element) {

          this.queue[this.rear] = element;
          this.rear++;
     }
     dequeue() {
          if (this.isEmpty()) {
               return "Queue Underflow";
          }

          let removed = this.queue[this.front];
          this.front++;

          return removed;

     }
     peek() {
          if (this.isEmpty()) {
               return "Queue Underflow";
          }
          return this.queue[this.front]
     }

     display() {
          if (this.isEmpty()) {
               return "Queue is Empty";
          }

          for (let i = this.front; i < this.rear; i++) {
               console.log(this.queue[i]);
          }
     }
     size(){
          return this.rear - this.front;
     }
}

let q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);


console.log("Peek :", q.peek());
console.log("Dequeue",q.dequeue());

console.log("After dequeue:");
q.display();

console.log("Size:", q.size());
console.log("Is Empty:", q.isEmpty())