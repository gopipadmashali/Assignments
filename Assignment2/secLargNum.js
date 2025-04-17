// Using function declaration
function secondLargest(arr) {
    let first = -Infinity, second = -Infinity;
    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num !== first) {
            second = num;
        }
    }
    return second;
}
console.log(secondLargest([5, 3, 8, 4, 2])); // 5

// Using function expression
const secondLargestExp = function(arr) {
    let first = -Infinity, second = -Infinity;
    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num !== first) {
            second = num;
        }
    }
    return second;
};
console.log(secondLargestExp([5, 3, 8, 4, 2])); // 5

// Using arrow function
const secondLargestArrow = (arr) => {
    let first = -Infinity, second = -Infinity;
    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num !== first) {
            second = num;
        }
    }
    return second;
};
console.log(secondLargestArrow([5, 3, 8, 4, 2])); // 5

// Using IIFE
(function(arr) {
    let first = -Infinity, second = -Infinity;
    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num !== first) {
            second = num;
        }
    }
    console.log(second); // 5
})([5, 3, 8, 4, 2]);