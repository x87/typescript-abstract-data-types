export default class Stack<T> {

	private items: T[];
	private top: number = 0;

	constructor(private readonly limit: number) {
		this.items = new Array<T>(limit);
	}

	push(item: T): void {
		if (this.top === this.limit) {
			throw new Error('Stack is full');
		}
		this.items[this.top++] = item;
	}

	pop(): T {
		if (this.top < 1) {
			throw new Error('Stack is empty');
		}
		return this.items[--this.top];
	}

	peek(): T {
		if (this.top < 1) {
			throw new Error('Stack is empty');
		}
		return this.items[this.top - 1];
	}

	get size(): number {
		return this.top;
	}

	isEmpty(): boolean {
		return this.top === 0;
	}

	clear() {
		this.top = 0;
	}

	toString(): string {
		return this.items.slice(0, this.top).toString();
	}
}
