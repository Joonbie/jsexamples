// a) Create a person object
const person = { name: "John" };
console.log(person);

// b) In JavaScript, constructor functions CAN be used to create objects
// Note: only 2 properties are available in the constructor function.
function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}

const person1 = new Person("John", "Doe");
const person2 = new Person("Steve", "Smith");
const person3 = new Person("Sally", "Wong");

console.log(person1);
console.log(person2);
console.log(person3);

// c) Add a new PROPERTY gender to the Person constructor function.
// Note: Now, person1 and person2 objects inherits gender property from it constructor ftn too.

Person.prototype.gender = "Male";
console.log(person1.gender);
console.log(person2.gender);

person3.gender = "Female";
console.log(person3);

// d) Add a new METHOD gender to the Person constructor function.
// Note: Now, person1 and person2 objects inherits getFullName method from its constructor ftn too.

Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

console.log("Greetings " + person1.getFullName());
console.log("Greetings " + person2.getFullName());

// e) Challenge
// 1) Create a new property called DOB for the Person object.
Person.prototype.dob = new Date();
person3.dob = new Date("01/01/1994");
console.log(person3);

// 2) Create a new method called PrintNameAndDOB() to display a person's Name and Date of Birth.
Person.prototype.printNameAndDob = function () {
  return ` ${this.getFullName()} ${this.dob}`;
};
console.log(`Hello ${person3.printNameAndDob()}`);

// Martin solution
// Person.prototype.PrintNameAndDob = function () {
//   return "Name: " + this.getFullName() + " DOB: " + this.dob.toDateString();
// };
// console.log(person3.PrintNameAndDob());
