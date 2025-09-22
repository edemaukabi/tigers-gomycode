// let voters = [];
// let age = 18;

// let etido = {
//   name: "Etido",
//   address: "Ekiti",
//   age: 20,
// };

// let esosa = {
//   name: "Esosa",
//   address: "Lagos",
//   age: 17,
// };

// let godwin = {
//   name: "Godwin",
//   address: "Abuja",
//   age: 23,
// };

// let emmanuel = {
//   name: "Emmanuel",
//   address: "Ekiti",
//   age: 16,
// };

// let people = [emmanuel, etido, esosa, godwin];

// for (let i = 0; i < people.length; i++) {
//   if (people[i].age >= 18) {
//     voters.push(people[i]);
//     console.log(`${people[i].name} just voted. This is voter number ${i + 1}`);
//   } else {
//     console.log(`${people[i].name} you cannot vote because of age barrier. Try again in ${18 - people[i].age} years time`);
//   }
// }

// console.log(`The numbers is ${voters.length}`)


// let student1 = "Etido"

function sentenceAnalyzer(sentence){
  let length = 0;
  let words = 0;
  let vowels = 0;

  for(let i = 0; i < sentence.length; i++){
    let ch = sentence[i];
    if (ch === "."){
      break; 
    }
    length++;

    if(ch === " "){
      words++;
    }

    if("aeiouAEIOU".includes(ch)){
      vowels++;
    }
  }
    words++;

    console.log("Length of sentence is ", length);
    console.log("Number of words is ", words);
    console.log("Number of vowels is ", vowels);
}

// sentenceAnalyzer("I am coming to your house now.")

let myArray = ["G", "O", "M", "Y", "C", "O", "D", "E"];

// console.log(myArray[myArray.length - 2])

let students = ["Etido", "Emmanuel", "Esosa", "Godwin", "Femi", "Ali", "Opeyemi", "Opeyemi"];

let myMatrix = [[2, 7], [87, 4], [1,5]]

// console.log(myMatrix[0][0])

// for (let i = 0; i<myMatrix.length; i++){
//   for(let j = 0; j < myMatrix[i].length; j++){
//     console.log(myMatrix[i][j])
//   }
// }

let mn_matrix = [[], [], []]

for (let i = 0; i<3; i++){
  for(let j = 0; j < 2; j++){
    mn_matrix[i][j] = 0;
  }
}

// console.log(mn_matrix)



// for(let i = 0; i < students.length; i++){
//   console.log(`The student at position ${i + 1} is ${students[i]}`)
// }

// console.log(students)

students[1] = "Praise"


// console.log(students)

let str_name = "    Hello";

let second = "hello   "

let mk = [67, 78, 9, 65]
mk = [155, 9, 65]

let gvar = "Etido";
// console.log(str_name.trim())

function add_nums(a, b){
  let sum = a+ b;
  let gvar = "Godwin"
  return gvar
}



console.log(add_nums(67, 90));
console.log(add_nums(8, 90))
console.log(add_nums(89, 2))
console.log(add_nums(3, 4))





