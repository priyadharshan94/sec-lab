//an array of objects is a collection where each element is an object with properties.this is used to group related data together in structured way.
let details = {
  name: "js",
  totalmark: 100,
  subject: {
    dbms: 100,
    java: 100,
  },
  sum: function () {
    let total = this.subject.dbms + this.subject.java;
    return total;
  },
};
console.log(details.sum());
console.log(details.name);
console.log(details["totalmark"]);
console.log(details.subject.dbms);
console.log(details.subject["java"]);
//object destructing is a  syntax in javascript that allows you to extract voices from objects and assign them to variables in a clean and readable way
let person = {
  job: "softwaretester",
  salary: 25000,
};
const { job: firstkey, salary: secondkey } = person;
console.log(firstkey + "" + secondkey);

let arr = new Array(1, 2, "three");
console.log(arr[2]);
let arr2 = ["js", true];
//array destructuring
const [name, b1, b2] = arr2;
console.log(name);
//filter returns a new array containing only the elements that match a condition
let students = [
  { name: "priyadharshan", grade: "A" },
  { name: "prasanna", grade: "B" },
  { name: "saran", grade: "A" },
];
let gradestudents = students.filter((student) => student.grade == "A");
console.log(gradestudents);
