// ===== FUNCTIONS =====
// function is a block of code used to perform a task

// normal function
function add(a, b){
    return a + b;
}
console.log(add(2, 3));

// named function expression
let div = function divide(a, b){
    return a / b;
};
console.log(div(8, 2));

// anonymous function
// function without name
let multiply = function(a, b){
    return a * b;
};
console.log(multiply(3, 4));

// advantage of anonymous function:
// reduced memory usage
// better code conciseness
