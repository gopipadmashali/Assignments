// var: Function-scoped, can be redeclared
var x = 10;
var x = 20; // No error
console.log(x);

// let: Block-scoped, cannot be redeclared
let y = 10;
// let y = 20; // Error: Identifier 'y' has already been declared
y = 20; // Allowed
console.log(y); 

// const: Block-scoped, cannot be redeclared or reassigned
const z = 10;
// z = 20; // Error: Assignment to constant variable
console.log(z); 