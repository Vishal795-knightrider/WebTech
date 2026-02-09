// ===== CLASSES =====
// class is a blueprint for creating objects
// introduced in ES6

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hello my name is ${this.name}`);
        console.log(this);
    }
}

let p1 = new Person("Vishal", 20);
let p2 = new Person("Sachin", 30);

console.log(p1 == p2); // false (different memory)
