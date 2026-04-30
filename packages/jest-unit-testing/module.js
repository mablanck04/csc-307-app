// module.js
function sum(a, b) {
    if (typeof a !== "number" || typeof b !== "number")
        throw new TypeError('Arguments must be numeric');
    return a + b;
}

function div(a, b) {
    if (b === 0) 
        throw new Error('Division by zero');

    if (typeof a !== "number" || typeof b !== "number")
        throw new TypeError('Arguments must be numeric');

    return a / b;
}

/* function to test if a string contains numbers
    returns true if contains a number, false otherwise */
function containsNumbers(text) {
    for (let i = 0; i < text.length; i++) {
        // NaN: "not a number"
        if (!isNaN(text.charAt(i)))
            return true;
    }
    return false;
}

export default { sum, div, containsNumbers };