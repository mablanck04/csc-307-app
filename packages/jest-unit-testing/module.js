// module.js
function sum(a, b) {
    return a + b;
}

function div(a, b) {
    if (b === 0){
        throw new Error('Division by zero');
    }
    return a / b;
}

function containsNumbers(text) {
    for (let i = 0; i < text.length; i++) {
        // NaN: "not a number"
        // returns true if the expression is not a number
        if (!isNaN(text.charAt(i)))
            return true;
    }
    return false;
}

export default { sum, div, containsNumbers };