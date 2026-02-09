// ===== THIS KEYWORD =====
// this refers to the object that is calling the function

console.log(this); // global object

function hello(){
    console.log("Hey whatsapp");
    console.log(this);
}
hello();

// this inside object method
let person = {
    name: "John",
    greet: function(){
        console.log(`Hello, my name is ${this.name}`);
        console.log(this);

        // arrow function inherits this from parent
        let innerGreet = () => {
            console.log("Inner greet " + this.name);
            console.log(this);
        };
        innerGreet();
    }
};
person.greet();
