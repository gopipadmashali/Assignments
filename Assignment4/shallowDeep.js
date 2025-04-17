// Shallow Copy Example
let arr1 = [1, 2, 3];
let shallowCopy = [...arr1]; // Using spread operator
shallowCopy[0] = 10;
console.log(arr1); //(original array is not affected)
console.log(shallowCopy); 

// Shallow Copy with Objects
let obj1 = { name: "John", address: { city: "New York" } };
let shallowObjCopy = { ...obj1 };
shallowObjCopy.address.city = "Los Angeles"; 
console.log(obj1.address.city); //(original object is affected)

// Deep Copy Example
let deepCopy = JSON.parse(JSON.stringify(obj1)); // Using JSON methods
deepCopy.address.city = "Chicago";
console.log(obj1.address.city); //(original object is not affected)
console.log(deepCopy.address.city);