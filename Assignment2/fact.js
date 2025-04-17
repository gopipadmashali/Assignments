// Using function declaration
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// Using function expression
const factorialExp = function(n) {
    if (n === 0) return 1;
    return n * factorialExp(n - 1);
};
console.log(factorialExp(5)); // 120

// Using arrow function
const factorialArrow = (n) => {
    if (n === 0) return 1;
    return n * factorialArrow(n - 1);
};
console.log(factorialArrow(5)); // 120

// Using IIFE
(function(n) {
    function factorial(n) {
        if (n === 0) return 1;
        return n * factorial(n - 1);
    }
    console.log(factorial(n)); // 120
})(5);