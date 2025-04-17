// Temporal Dead Zone (TDZ) occurs when accessing a variable declared with let or const before its declaration
// console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;

function exampleTDZ() {
    // console.log(b); // ReferenceError: Cannot access 'b' before initialization
    let b = 20;
}
exampleTDZ();