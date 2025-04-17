// Using function declaration
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}
console.log(bubbleSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]

// Using function expression
const bubbleSortExp = function(arr) {
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
};
console.log(bubbleSortExp([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]

// Using arrow function
const bubbleSortArrow = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
};
console.log(bubbleSortArrow([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]

// Using IIFE
(function(arr) {
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    console.log(arr); // [2, 3, 4, 5, 8]
})([5, 3, 8, 4, 2]);