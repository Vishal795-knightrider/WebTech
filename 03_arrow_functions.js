// ===== ARROW FUNCTIONS =====
// introduced in ES6
// shorter syntax
// does NOT have its own this keyword

// single expression arrow function
let multiply = (a, b) => a * b;
console.log(multiply(5, 6));

// arrow function with multiple statements
let div = (a, b) => {
    let res = a / b;
    return res;
};
console.log(div(14, 2));
