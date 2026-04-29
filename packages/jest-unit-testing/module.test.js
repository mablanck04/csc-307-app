// module.test.js
import mut from './module.js'; // MUT = module under test

// testing function sum(a, b)
test('Testing sum -- success', () => {
    const expected = 30;
    const got = mut.sum(12, 18);
    expect(got).toBe(expected);
    expect(got).toBeGreaterThan(20);
});

// testing function div(a, b)
test('Testing div -- success', () => {
    const expected = 10;
    const got = mut.div(30, 3);
    expect(got).toBe(expected);
});

test('Divide by zero', () => {
    expect(() => divide(10, 0)).toThrow(Error);
});

// testing function containsNumbers(text)
