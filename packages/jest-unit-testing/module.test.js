// module.test.js
import mut from './module.js'; // MUT = module under test

/* testing function sum(a, b) */

// test 1: addition of two numeric values
test('Testing sum -- success', () => {
    const expected = 30;
    const got = mut.sum(12, 18);
    expect(got).toBe(expected);
    expect(got).toBeGreaterThan(20);
});

// test 2: addition of two numeric values, including negatives
test('Testing sum -- negatives', () => {
    const expected = 5;
    const got = mut.sum(10, -5);
    expect(got).toBe(expected);
});

// test 3: non-numeric characters
test('Testing sum -- non-numeric', () => {
    expect(() => mut.sum(10, 'a')).toThrow(Error);
});

// test 4: the null character
test('Testing sum -- null', () => {
    expect(() => mut.sum(7, null).toThrow(Error));
});

/* testing function div(a, b) */

// test 1: division of two numeric values
test('Testing div -- success', () => {
    const expected = 10;
    const got = mut.div(30, 3);
    expect(got).toBe(expected);
});

// test 2: divide by zero
test('Testing div -- divide by zero', () => {
    expect(() => mut.div(10, 0)).toThrow(Error);
});

// test 3: non-numeric characters
test('Testing div -- non-numeric', () => {
    expect(() => mut.div(45, 'c')).toThrow(Error);
});

/* testing function containsNumbers(text) 
    bug in the function: JS considers the space character to be the number 0,
    so any strings containing multiple words evaluates 'true' */
    
// test 1: one word, no numbers
test('Testing containsNumbers -- one word', () => {
    expect(mut.containsNumbers("hello")).toBeFalsy();
});

// test 2: string with numbers
test('Testing containsNumbers -- letters & numbers', () => {
    expect(mut.containsNumbers("abc123")).toBeTruthy();
});
