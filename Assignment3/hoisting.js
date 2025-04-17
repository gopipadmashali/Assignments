// Example of Hoisting
console.log(hoistedVar); // undefined 
var hoistedVar = "I am hoisted";

hoistedFunction(); // Works because function declarations are hoisted
function hoistedFunction() {
    console.log("I am a hoisted function");
}

// let and const are not hoisted in the same way
// console.log(notHoisted); // ReferenceError: Cannot access 'notHoisted' before initialization
let notHoisted = "I am not hoisted";