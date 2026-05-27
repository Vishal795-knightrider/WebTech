const students = [
{
name: "Amit",
marks: [78, 90, 66],
skills: ["JS", "React","HTML","CSS"],
address: { city: "Ghaziabad", state: "UP" }
},
{
name: "Riya",
marks: [88, 95, 70],
skills: ["Node", "MongoDB","Flutter"],
address: null
},
{
name: "Karan",
marks: [45, 55, 60],

skills: ["Python", "Flask"],
address: { city: "Delhi", state: "Delhi" }
}
];
const courses = ["JS", "React", "Node", "Express"];

//Q1 Return first student Name
// Output -> Amit

function firstStudentName(arr){
return arr[0].name;
}

// Q2 Return count of students having average greater than 70
// Output -> 2
function studentCount(arr){
return arr.filter(stu => 
(stu.marks.reduce((a,b)=>a+b,0)/stu.marks.length) > 70
).length;
}

// Q3 Return all courses with their string lengths
//Output -> [['JS',2],['React',5],['Node',4],['Express',7]]
function allCourses(arr){
return arr.map(course => [course, course.length]);
}

// Q4 Return first and last course using destructuring
//Output -> { firstCourse: 'JS', lastCourse: 'Express' }
function firstCourse(arr){
const [firstCourse] = arr;
const lastCourse = arr[arr.length - 1];

return { firstCourse, lastCourse };
}

// Q5 Return greeting with average marks using template literal
// Of First Student
// Output: Hello Amit, your average marks are 78
function greetStudent(arr){
const student = arr[0];
const avg = Math.floor(student.marks.reduce((a,b)=>a+b,0)/student.marks.length);

return `Hello ${student.name}, your average marks are ${avg}`;
}

// Q6 Return uppercase student names with total marks
//[['AMIT',234],['RIYA',253],['KARAN',160]]
function upperNames(arr){
return arr.map(stu => [
stu.name.toUpperCase(),
stu.marks.reduce((a,b)=>a+b,0)
]);
}

// Q7 Return students whose every mark is above 65
//["Amit","Riya"]
function toppers(arr){
return arr
.filter(stu => stu.marks.every(mark => mark > 65))
.map(stu => stu.name);
}

// Q8 : Return all student cities if city not available
// then Not Available
// Output -> ['Ghaziabad','Not Available','Delhi']

function studentCity(arr){
return arr.map(stu => stu.address?.city || "Not Available");
}

// Q9 Return city-state string or "City Not Found"
// [ 'Ghaziabad-UP', 'City Not Found', 'Delhi-Delhi' ]
function safeCity(arr){
return arr.map(stu => 
stu.address 
? `${stu.address.city}-${stu.address.state}`
: "City Not Found"
);
}
// Q10 Destructure first course and count remaining courses
// Output : { firstCourse: 'JS', remainingCourses: 3 }
function courseInfo(arr){
const [firstCourse, ...remaining] = arr;

return {
firstCourse,
remainingCourses: remaining.length
};
}

// Q11 Merge marks of first and second student and sort ascending
// Output : [ 66, 70, 78, 88, 90, 95 ]
function mergeMarks(arr){
return [...arr[0].marks, ...arr[1].marks].sort((a,b)=>a-b);
}

// Q12 Return average marks of first student using reduce()
// Output 78
function totalMarks(arr){
return Math.floor(
arr[0].marks.reduce((a,b)=>a+b,0) / arr[0].marks.length
);
}

// Q13 Return student names sorted by average marks descending
// Output : [ 'Riya', 'Amit', 'Karan' ]
function averageMarksDesc(arr){
return [...arr]
.sort((a,b)=>{
let avgA = a.marks.reduce((x,y)=>x+y,0)/a.marks.length;
let avgB = b.marks.reduce((x,y)=>x+y,0)/b.marks.length;

return avgB - avgA;
})
.map(stu => stu.name);
}

// Q14 Return Promise: after 2 sec if all students have
// average marks above 60 then Resolve All Students Performing
// Well otherwise Reject Some Students Need Improvement
//Output : Some Students Need Improvement
function performancePromise(arr){
return new Promise((resolve,reject)=>{
setTimeout(()=>{
const allGood = arr.every(stu => 
(stu.marks.reduce((a,b)=>a+b,0)/stu.marks.length) > 60
);

if(allGood){
resolve("All Students Performing Well");
}
else{
reject("Some Students Need Improvement");
}
},2000);
});
}

// Q15 Consume performancePromise() using then() and catch()
// return result in lowercase
// Output: some students need improvement
function performanceReport(arr){
return performancePromise(arr)
.then(res => res.toLowerCase())
.catch(err => err.toLowerCase());
}

// DRIVER FUNCTION DO NOT MODIFY
function driver(){

console.log("Q1:", firstStudentName(students));
console.log("Q2:", studentCount(students));
console.log("Q3:", allCourses(courses));
console.log("Q4:", firstCourse(courses));
console.log("Q5:", greetStudent(students));

console.log("Q6:", upperNames(students));
console.log("Q7:", toppers(students));
console.log("Q8:", studentCity(students));
console.log("Q9:", safeCity(students));
console.log("Q10:", courseInfo(courses));

console.log("Q11:", mergeMarks(students));
console.log("Q12:", totalMarks(students));
console.log("Q13:", averageMarksDesc(students));

performancePromise(students)
.then(res => console.log("Q14:", res))
.catch(err => console.log("Q14:", err));

performanceReport(students)
.then(res => console.log("Q15:", res))
.catch(err => console.log("Q15:", err));
}

driver();