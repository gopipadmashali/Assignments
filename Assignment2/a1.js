// Example 1: for-in loop with an object
let person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Example 2: for-of loop with an array
let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
    console.log(fruit);
}

// Example 3: for-in loop with an array
for (let index in fruits) {
    console.log(`${index}: ${fruits[index]}`);
}

// Example 4: for-of loop with a string
let str = "hello";
for (let char of str) {
    console.log(char);
}

// Example 5: for-in loop with a string
for (let index in str) {
    console.log(`${index}: ${str[index]}`);
}