// A singly linked list is a data structure that contains a collection of nodes where each node has data and a
// link to the next node. A singly linked list has a head which is the starting node, a tail which is the last
// node, and a length property.

// Unlike arrays, linked lists make it easier to add and delete data without having to re-index the data.

// Define a Node class with data and Next

class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
}

class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Add a new node at the end of the linked list.
  push(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // Remove the last node in the linked list.
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }
    return current;
  }
  // Remove the first node in the linked list.
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }
  unShift(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}
