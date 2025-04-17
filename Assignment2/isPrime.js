// Using function declaration
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // true

// Using function expression
const isPrimeExp = function(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
};
console.log(isPrimeExp(7)); // true

// Using arrow function
const isPrimeArrow = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
};
console.log(isPrimeArrow(7)); // true

// Using IIFE
(function(num) {
    let isPrime = true;
    if (num <= 1) isPrime = false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) isPrime = false;
    }
    console.log(isPrime); // true
})(7);