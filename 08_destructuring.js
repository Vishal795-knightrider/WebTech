// ===== DESTRUCTURING =====
// unpack values from arrays or objects

// array destructuring
let arr = [1, 2, 3];
let [a, , b] = arr;
console.log(a, b);

// default values
const data = [5];
const [x, y = "Vishal"] = data;
console.log(x);
console.log(y);

// object destructuring
let person = {
    Name: "Vishal",
    country: "India"
};

let { country = "USA" } = person;
console.log(country);
console.log(person);
