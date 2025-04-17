// Spread Operator with Arrays
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2);

// Spread Operator with Objects
let obj1 = { name: "John", age: 30 };
let obj2 = { ...obj1, city: "New York" };
console.log(obj2);

// Rest Operator with Arrays
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4));

// Rest Operator with Objects
let { name, ...rest } = { name: "John", age: 30, city: "New York" };
console.log(name);
console.log(rest); 