import Stack from './';

describe('Stack class', () => {
	let maxSize: number = 3;
	let stack: Stack<number>;
	beforeEach(() => {
		stack = new Stack<number>(maxSize);
	});

	it('has method isEmpty', () => {
		expect(stack.isEmpty()).toBe(true);
	});

	it('has method push', () => {
		expect(stack.isEmpty()).toBe(true);
		stack.push(10);
		stack.push(11);
		stack.push(12);
		expect(stack.size).toEqual(3);
		expect(stack.isEmpty()).toBe(false);

		// stack overflow
		expect(() => stack.push(13)).toThrow();
	});

	it('has method pop', () => {
		expect(stack.isEmpty()).toBe(true);
		stack.push(10);
		stack.push(11);
		expect(stack.isEmpty()).toBe(false);
		expect(stack.pop()).toEqual(11);
		expect(stack.pop()).toEqual(10);
		expect(stack.isEmpty()).toBe(true);

		// stack is empty
		expect(() => stack.pop()).toThrow();
	});

	it('has method peek', () => {
		expect(stack.isEmpty()).toBe(true);
		stack.push(10);
		stack.push(11);
		expect(stack.peek()).toEqual(11);
		expect(stack.size).toEqual(2);
		expect(stack.isEmpty()).toBe(false);
	});

	it('has method clear', () => {
		stack.push(10);
		expect(stack.isEmpty()).toBe(false);
		stack.clear();
		expect(stack.isEmpty()).toBe(true);
	});

	it('could be serialized', () => {
		expect(stack.toString()).toEqual('');
		stack.push(12);
		expect(stack.toString()).toEqual('12');
		stack.push(13);
		expect(stack.toString()).toEqual('12,13');
		stack.pop();
		expect(stack.toString()).toEqual('12');
		stack.pop();
		expect(stack.toString()).toEqual('');
	});
});
