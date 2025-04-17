// 1. NaN is a number
console.log(typeof NaN);

// 2. Adding arrays
console.log([1, 2] + [3, 4]);

// 3. Comparing null and undefined
console.log(null == undefined); 
console.log(null === undefined);

// 4. typeof null
console.log(typeof null); // "object" (this is a bug in JavaScript)

// 5. Empty array is truthy
console.log([] == true); 
console.log([] == false); 