List<int?> numbers = [10, null, -5, 25, 18, null, 7, 40];
List<String> subjects = ["Flutter", "Dart", "Firebase"];

class Student {
String name;
int rollNo;
double cgpa;
String branch;
String city;
Student(this.name, this.rollNo, this.cgpa, this.branch, this.city);
}

class Topper extends Student {
double scholarship;
Topper(
String name,
int rollNo,
double cgpa,
String branch,
String city,
this.scholarship,
) : super(name, rollNo, cgpa, branch, city);
}

mixin Message {
String showMessage() {
return "Welcome Student";
}
}

class College with Message {}

Student stu = Student("Ramesh", 101, 8.7, "CSE", "Jaipur");

// Q1 Return total number of subjects
// Output -> 3
int subjectCount(List<String> arr) {
return arr.length;
}

// Q2 Return first subject in uppercase
// Output -> FLUTTER
String firstSubject(List<String> arr) {
return arr[0].toUpperCase();
}

// Q3 Return student city using object
// Output -> Jaipur
String studentCity(Student s) {
return s.city;
}

// Q4 Return square of all non-null positive numbers
// Output -> [100, 625, 324, 49, 1600]
List<int> squareNumbers(List<int?> arr) {
return arr
.where((num) => num != null && num > 0)
.map((num) => num! * num)
.toList();
}

// Q5 Medium: Return total of numbers
// if null add 0
// if negative convert into positive then add
// if positive add as it is
// Output -> 105
int totalNumbers(List<int?> arr) {
return arr.fold(0, (sum, num) {
if (num == null) return sum;
return sum + num.abs();
});
}

// Q6 Medium: Return all even numbers greater than 15
// Output -> [18, 40]
List<int> evenGreaterThan15(List<int?> arr) {
return arr
.where((num) => num != null && num > 15 && num % 2 == 0)
.map((num) => num!)
.toList();
}

// Q7 Calculator using switch case
// operations -> add, sub, mul, div
// Output -> 200
double calculator(double a, double b, String op) {
switch (op) {
case "add":
return a + b;

case "sub":
return a - b;

case "mul":
return a * b;

case "div":
return a / b;

default:
return 0;
}
}

// Q8 Return sentence using string interpolation
// Output -> Student Ramesh belongs to CSE
String studentInfo(Student s) {
return "Student ${s.name} belongs to ${s.branch}";
}

// Q9 Return CGPA status
// if cgpa > 8 return Excellent else Average
// Output -> Excellent
String cgpaStatus(Student s) {
return s.cgpa > 8 ? "Excellent" : "Average";
}

// Q10 Create Topper object and return scholarship amount
// Output -> 50000.0
double scholarshipAmount() {
Topper t = Topper(
"Rohit",
102,
9.5,
"CSE",
"Delhi",
50000.0,
);

return t.scholarship;
}

// Q.11 Use mixin through College class
// Output -> Welcome Student
String mixinDemo() {
College c = College();
return c.showMessage();
}

// Q12 Return all subjects in lowercase
// Output -> [flutter, dart, firebase]
List<String> lowerSubjects(List<String> arr) {
return arr.map((sub) => sub.toLowerCase()).toList();
}

// Q13 Return highest number ignoring null values
// Output -> 40
int highestNumber(List<int?> arr) {
List<int> nums = arr.where((num) => num != null).map((e) => e!).toList();
nums.sort();
return nums.last;
}

// Q14 Promise/Future
// Return "Passed" after 2 sec if total numbers > 50
// otherwise return "Failed"
// Output -> Passed
Future<String> resultStatus(List<int?> arr) {
return Future.delayed(Duration(seconds: 2), () {
return totalNumbers(arr) > 50 ? "Passed" : "Failed";
});
}

// Q15 Consume resultStatus using then()
// print result in lowercase
// Output -> passed
void resultReport(List<int?> arr) {
resultStatus(arr).then((value) {
print("Q15: ${value.toLowerCase()}");
});
}

// DRIVER FUNCTION DO NOT MODIFY
void driver() {
print("Q1: ${subjectCount(subjects)}");
print("Q2: ${firstSubject(subjects)}");
print("Q3: ${studentCity(stu)}");
print("Q4: ${squareNumbers(numbers)}");
print("Q5: ${totalNumbers(numbers)}");
print("Q6: ${evenGreaterThan15(numbers)}");
print("Q7: ${calculator(20, 10, 'mul')}");
print("Q8: ${studentInfo(stu)}");
print("Q9: ${cgpaStatus(stu)}");
print("Q10: ${scholarshipAmount()}");
print("Q11: ${mixinDemo()}");
print("Q12: ${lowerSubjects(subjects)}");
print("Q13: ${highestNumber(numbers)}");
resultStatus(numbers).then((value) => print("Q14: $value"));
resultReport(numbers);
}
void main() {
driver();
}