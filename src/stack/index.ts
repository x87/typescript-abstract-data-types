export default class Stack<T> {

	private items: T[] = [];

	constructor(private readonly limit: number = Infinity) {
	}

	push(item: T) {
		if (this.size >= this.limit) throw new Error('Stack is full');
		this.items.push(item);
	}

	pop(): T {
		if (this.size < 1) throw new Error('Stack is empty');
		return this.items.splice(-1, 1)[0];
	}

	peek(): T {
		return this.items[this.size - 1];
	}

	get size() {
		return this.items.length;
	}
}
