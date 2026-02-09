// ===== OBJECTS =====
// an object is a collection of key value pairs
// used to represent real world entities

const user = {
    name: "Abhishek",
    role: "Trainer",
    experience: 13
};

// problem:
// TypeError: Assignment to constant variable
// const object cannot be reassigned, but properties can be changed

// user = { name: "Abhi" }; ❌

// object reference issue
let a = { x: 10 };
let b = a;
b.x = 20;
console.log(a.x); // 20

// nested object
const obj1 = {
    name: "Vishal",
    obj2: {
        name: "Abhi",
        age: 45
    }
};
console.log(obj1.obj2.age);
