// ===== COPY CONCEPTS =====

// primitive data type copy (deep copy)
let x = 20;
let y = x;
y = 30;
console.log(x);
console.log(y);

// non-primitive data type copy (shallow copy)
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2[0] = 10;
console.log(arr1[0]);
