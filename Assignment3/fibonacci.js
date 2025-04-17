// Function Declaration
function fibonacciDeclaration(n) {
    let a = 0, b = 1, result = [a, b];
    for (let i = 2; i < n; i++) {
        let next = a + b;
        result.push(next);
        a = b;
        b = next;
    }
    return result;
}
console.log(fibonacciDeclaration(10));

// Function Expression
const fibonacciExpression = function(n) {
    let a = 0, b = 1, result = [a, b];
    for (let i = 2; i < n; i++) {
        let next = a + b;
        result.push(next);
        a = b;
        b = next;
    }
    return result;
};
console.log(fibonacciExpression(10));

// Arrow Function
const fibonacciArrow = (n) => {
    let a = 0, b = 1, result = [a, b];
    for (let i = 2; i < n; i++) {
        let next = a + b;
        result.push(next);
        a = b;
        b = next;
    }
    return result;
};
console.log(fibonacciArrow(10));

// IIFE
(function(n) {
    let a = 0, b = 1, result = [a, b];
    for (let i = 2; i < n; i++) {
        let next = a + b;
        result.push(next);
        a = b;
        b = next;
    }
    console.log(result);
})(10);