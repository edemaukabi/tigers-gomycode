let person = "Emmanuel";

// let name = prompt("What is your name?");
// this program is a basic program that teaches javascript
// let result = confirm("Are you sure you want to delete this item?")

// console.log(result)

/* if (result == true) {
    console.log("Item deleted successfully")
} else {
    console.log("Item still remains")
}
*/

let you = "hello";

let my_var = null;

// console.log("this is", my_var)

let student1 = {
  name: "Emmanuel",
  age: 20,
  address: "Lagos",
};

let my_arr = ["apple", "mangoes", "grapes"];

let num = 60;

// let a;
// let b;

// a = 78;

// b = a;

let a = false;

let b = true;

let c = 7;

let d = 5;

5 == "true";

a && b;

c || d;

let result = Boolean(""); // false
// let result = a == b;
// console.log(result)
// console.log("before ", num)

// num = num + 7;
// num+=7
// num--

// let x = 2; // truthy
// let y = 0; // falsy
let j = ""; // falsy
let u = "5"; // truthy
let k = "hello"; // truthy
let w = true; // truthy
// let z = false; // falsy
// boolean number string
// Boolean() Number()

/*
console.log("73", y || x) // 2
console.log("74", j || x) // 2
console.log("75", k || z) // "hello"
console.log("76", "etido" || "esosa") // "etido"
console.log("77", false || true) // true
console.log("78", "" || "hello") // "hello"
*/
var x = 20;
var y = 10;
var z = 5;

/*
console.log(z > x && z < y) // true
console.log(z > x && z <= y) // true
console.log(z > x && z != y) // true
console.log(z <= x && y <= z) // false
*/

let myName = true;
// console.log(!myName)

let myFruits = ["apple", "oranges", "mango"];

// console.log(myFruits.includes("pineapple"))
// if (!(myFruits.includes("pineapple"))){
//     console.log("Fruit is not found")
// }
// else {
//     console.log("No fruit found")
// }

let temp = "hello";

let firstName = "Ali";
let lastName = "Emmanuel";

let greeting = "Hello!! " + firstName + " " + lastName;

let greet = `Hello!! ${firstName} ${lastName} ${45 + 9} hello`;
// console.log(greet.toUpperCase())

// console.log(!!temp)

function addNums(a = 5, b = 10) {
  let num1 = a;
  let num2 = b;
  let result = num1 + num2;
  return result;
}

// console.log("Just reached line 124")
// console.log(addNums(45, 5) * 5)
// console.log(addNums(6, 1) - 5)
// console.log(addNums(34, 2))
// console.log(addNums())

let shouldRun = false;
let illegibleAge = 18;

let studentAge = 18;
// Conditionals

function genderReport(gender) {
  if (gender.toLowerCase() === "m") {
    return "Your gender is male \nYou are a man";
  } else if (gender.toLowerCase() === "f") {
    return "Your gender is female \nYou are a woman";
  } else {
    return "Sorry, I don't know your gender";
  }
}

function genderReportSwitch(gender) {
  switch (gender) {
    case "m":
      return "Your gender is male \nYou are a man"
      // break;
    case "f":
      return "Your gender is female \nYou are a woman"
      // break;
    default:
      return "Sorry, I don't know your gender"
  }
}

// genderReport("m")
// console.log(genderReportSwitch("m"));
// console.log(genderReportSwitch("b").toUpperCase());
// console.log(genderReportSwitch("f").toUpperCase());

// genderReport("m")

// if (studentAge > illegibleAge) {
//   console.log("Just reached line 124");
//   console.log(addNums(45, 5) * 5);
//   console.log(addNums(6, 1) - 5);
//   console.log(addNums(34, 2));
//   console.log(addNums());
// } else if (studentAge === 18) {
//   console.log("Student can register to vote");
// } else {
//   console.log("Student is not eligible to vote");
// }

// console.log("Finished");

let numbersArr = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1];

let sum = 0;
// let index = 0;

// for (let i = 0; i < numbersArr.length; i++){
//   console.log(i)
//   if(i===5){
//     continue
//   }  
//   sum = sum + numbersArr[i];
//   console.log(`Sum is ${sum} and this is iteration number ${i+1}`)
// }

// for (let i in numbersArr){
//   sum = sum + numbersArr[i];
//   console.log(`Sum is ${sum} and this is iteration number ${parseInt(i) + 1}`)}

// for (let val of numbersArr){
// sum = sum + val ;
// console.log(`Sum is ${sum}`)}

// console.log(sum)

// while (index < numbersArr.length){
//   if (index === 5) {
//     index++
//     continue;
//   }
//   console.log("I am executed from the while loop")
//   sum = sum + numbersArr[index];
//   index++
// }

// do {
//   console.log("I am executed from the do while loop")
//   sum = sum + numbersArr[index];
//   index++
// }while(index < numbersArr.length)

// console.log( 'The loop was executed ' + index + ' times' );
// console.log(sum);






let myArr = ["Etido"];

// console.log(myArr);

myArr.unshift("Esosa");
myArr.unshift("Emmanuel");
myArr.unshift("Opeyemi");
myArr.unshift("Ali");
myArr.unshift("Jimmy");
// console.log(myArr.pop());
// console.log(myArr.shift())

// console.log(`myArr has a size of ${myArr.length}`);
// console.log(myArr);

let myObj = {name: "Esosa", address: "Lagos", isActive: true}

const gimli = {
    name: "Gimli",
    race: "dwarf",
    weapon: "axe",
    greet: function() {
        return `Hi, my name is ${this.name}!`;
    },
};

gimli["age"] = 40;

delete gimli.race

// console.log(gimli)

// Create a function that takes two numbers as arguments and returns their sum.
function addition(a, b){
  return a+b
}










