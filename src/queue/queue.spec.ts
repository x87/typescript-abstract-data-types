import Queue from './';

describe('Queue class', () => {
	let queue: Queue<number>;
	let maxSize: number = 3;

	beforeEach(() => {
		queue = new Queue<number>(maxSize);
	});

	it('has method isEmpty', () => {
		expect(queue.isEmpty()).toBe(true);
	});

	it('has method enqueue', () => {
		expect(queue.isEmpty()).toBe(true);
		queue.enqueue(3);
		queue.enqueue(4);
		expect(queue.size).toEqual(2);
		expect(queue.isEmpty()).toBe(false);
		queue.enqueue(5);
		expect(() => queue.enqueue(6)).toThrow();
	});

	it('has method dequeue', () => {
		expect(queue.isEmpty()).toBe(true);
		queue.enqueue(3);
		queue.enqueue(4);
		expect(queue.isEmpty()).toBe(false);
		expect(queue.dequeue()).toEqual(3);
		expect(queue.dequeue()).toEqual(4);
		expect(queue.isEmpty()).toBe(true);
		expect(() => queue.dequeue()).toThrow();
	});

	it('has method clear', () => {
		queue.enqueue(10);
		expect(queue.isEmpty()).toBe(false);
		queue.clear();
		expect(queue.isEmpty()).toBe(true);
	});


	it('could be serialized', () => {
		expect(queue.toString()).toEqual('');
		queue.enqueue(12);
		expect(queue.toString()).toEqual('12');
		queue.enqueue(13);
		expect(queue.toString()).toEqual('12,13');
		queue.dequeue();
		expect(queue.toString()).toEqual('13');
		queue.dequeue();
		expect(queue.toString()).toEqual('');
	});

});
