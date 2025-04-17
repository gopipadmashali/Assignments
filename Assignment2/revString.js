// Using function declaration
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // "olleh"

// Using function expression
const reverseStringExp = function(str) {
    return str.split('').reverse().join('');
};
console.log(reverseStringExp("hello")); // "olleh"

// Using arrow function
const reverseStringArrow = (str) => {
    return str.split('').reverse().join('');
};
console.log(reverseStringArrow("hello")); // "olleh"

// Using IIFE
(function(str) {
    console.log(str.split('').reverse().join('')); // "olleh"
})("hello");