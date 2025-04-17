// Mutable Example (Objects and Arrays)
let person = { name: "John", age: 30 };
person.age = 31; // Modifying the object
console.log(person); 

let fruits = ["apple", "banana"];
fruits.push("mango"); // Modifying the array
console.log(fruits); 

// Immutable Example (Strings and Numbers)
let str = "Hello";
let newStr = str.toUpperCase(); // Strings are immutable, a new string is created
console.log(str);
console.log(newStr); 

let num = 10;
let newNum = num + 5; // Numbers are immutable, a new value is created
console.log(num); 
console.log(newNum); 