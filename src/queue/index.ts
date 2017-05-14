export default class Queue<T> {

	private items: T[] = [];

	constructor(private readonly limit: number = Infinity) {
	}

	enqueue(item: T): void {
		if (this.size >= this.limit) {
			throw new Error('Queue is full')
		}
		this.items.push(item);
	}

	dequeue(): T {
		if (this.size < 1) {
			throw new Error('Queue is empty')
		}
		return this.items.splice(0, 1)[0];
	}

	isEmpty(): boolean {
		return this.size === 0;
	}

	get size() {
		return this.items.length;
	}

}
