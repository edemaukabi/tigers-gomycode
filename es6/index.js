import multiplyTwoNums, {remainder, addTwoNums,  classCode } from "./utils.js";

let studentName = "Jimmy";
const PI = 3.142;

// var address = "Lagos";

// for( var i = 0; i<=5; i++){
//     console.log("for loop block ", i)
// }

// console.log("outside the block ", i)

let firstName = "John";
let lastName = "Doe";

// console.log(firstName +" "+ lastName + ". Hello, how are you?")

// console.log(`${firstName} ${lastName}. Hello, How are you? ${4 + 5}`)

// let canVote = false;

let age = 16;

// if(age >= 18){
//     canVote = true;
// }

// condition ? expression1 : expression2

let canVote = age >= 18 ? true : false;

// console.log(canVote)

function addTow(a, b) {
  return a + b;
}

// console.log(addTow(8, 6))

const addNums = (a, b) => {
  return a + b;
};

let myarr = [7, 8, 9, 10, 45];

let newarr = myarr.map((item) => {
  return item * 2;
});

// console.log(newarr)

const higherOrder = (callback, name) => {
  let a = "Hello";
  let b = "Goodbye!";
  let result = callback(name);
  return `${a} ${result} ${b}`;
};

const higher = () => {
  return () => {
    return "I am returnded from inner function";
  };
};

const greet = (name) => {
  return `${name}, how are you? `;
};

// higherOrder()

// console.log(higherOrder(greet, "Esosa"))

let output = higher();

// console.log(output());

const people = [{ name: "Max" }, { name: "Jack" }, { name: "Mary" }];
let i = 0;
// while (i < people.length && people[i].name != "John") {
//   i++;
// }
// if (i !== people.length) {
//   console.log("Jack is in " + i);
// } else {
//   console.log("Cannot find John");
// }

// const criteria = (item) => {
//     return item.name === "John"
// }

// const personFound = people.find(person =>  person.name === "Mary")

// console.log(personFound)

// const showNames = () => {
//     people.forEach(person => console.log(person.name))
// }

// showNames()

const products = [
  { name: "Milk", price: 15 },
  { name: "Water", price: 9 },
  { name: "Bread", price: 5 },
];

// const newProducts = products.forEach((product) => product.price+=2)
// let student = {name: "Esosa", address: "Lagos", name: "Jimmy"}

const newProducts = products.map(product => {return {...product, price: product.price + 2}})

// console.log("original", products)
// console.log("modified", newProducts)

// console.log("The product of 5 and 4 is ", multiplyTwoNums(5,4))
// console.log("The remainder of the divison 5 by 4 is ", remainder(5,4))
// console.log(`The class code is ${classCode}`)

let employee = {
  fullName: "John Doe",
  address: "Lagos",
  isActive: false,
  groups: ["Sales", "Marketting", "Engineering", "Product"],
  supervisor: {
    fullName: "Peter Shane",
    address: "Abuja",
    isActive: true,
    subjects: ["John", "Bolu", "Ahmed"]
  }
}

let { address, isActive, supervisor } = employee;
let { address: supervisorAddress } = supervisor;

let employeeName = employee.fullName;
let supervisorName = employee.supervisor.fullName;

// console.log(`The student's address is ${address} and the student is ${isActive ? "active" : "not active"}`)
// console.log(`The name of ${employeeName}'s supervisor is ${supervisorName} and supervisor's address is ${supervisorAddress}`)
// console.log(`The name of ${employeeName}'s supervisor is ${supervisorName}`)
// console.log(`The name of ${employeeName}'s supervisor is ${supervisorName}`)

let studentList = ["Etido", "Esosa", "Jimmy", "Opeyemi"];
let secondList = ["Godwin", "Emmanuel"]

// let student1 = studentList[0];
// let student2 = studentList[1];

// let [student1, student2] = studentList

// let updatedStudentList = []

// for(let i=0; i<studentList.length; i++){
//   updatedStudentList.push(studentList[i])
// }

// updatedStudentList.push("Ali")

// let updatedStudentList = studentList.concat(["Ali"])

let updatedStudentList = [...studentList, "Ali", ...secondList]


// console.log(updatedStudentList)
// console.log("Old list is ", studentList)
// console.log(`First two students in the list are ${student1} and ${student2}`)

let itemOfInterest = {
  name: "Apple",
  price: 25,
  discount: true
}

let newItem = {...itemOfInterest, price: itemOfInterest.price + 2}

itemOfInterest["onSale"] = false;
console.log(itemOfInterest)
console.log("new item", newItem)



