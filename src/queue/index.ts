export default class Queue<T> {

	private items: T[];
	private head: number = 0;
	private tail: number = 0;
	private count: number = 0;

	constructor(private readonly limit: number) {
		this.items = new Array<T>(limit);
	}

	enqueue(item: T): void {
		if (this.count === this.limit) {
			throw new Error('Queue is full')
		}
		this.count++;
		this.items[this.tail++] = item;
		this.tail %= this.limit;
	}

	dequeue(): T {
		if (this.count === 0) {
			throw new Error('Queue is empty')
		}
		this.count--;
		this.head %= this.limit;
		return this.items[this.head++] as T;
	}

	get size() {
		return this.count;
	}

	isEmpty(): boolean {
		return this.count === 0;
	}

	clear(): void {
		this.tail = 0;
		this.head = this.limit;
		this.count = 0;
	}

	toString(): string {
		return this.items.slice(this.head % this.limit, this.tail).toString();
	}

}
