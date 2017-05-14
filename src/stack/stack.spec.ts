import Stack from './';

describe("Stack class", function() {
	let maxSize = 3;
	let stack: Stack<number>;
	beforeEach(() => {
		stack = new Stack<number>(maxSize);
	});

	it("is defined", () => {
		expect(stack).toBeDefined();
	});

	it("has method push", () => {
		expect(stack.size).toEqual(0);
		stack.push(10);
		stack.push(11);
		expect(stack.size).toEqual(2);
		stack.push(12);

		// stack overflow
		expect(() => stack.push(13)).toThrow();
	});

	it("has method pop", () => {
		expect(stack.size).toEqual(0);
		stack.push(10);
		stack.push(11);
		expect(stack.pop()).toEqual(11);
		expect(stack.size).toEqual(1);
		stack.pop();

		// stack is empty
		expect(() => stack.pop()).toThrow();
	});

	it("has method peek", () => {
		expect(stack.size).toEqual(0);
		stack.push(10);
		stack.push(11);
		expect(stack.peek()).toEqual(11);
		expect(stack.size).toEqual(2);
	});
});
