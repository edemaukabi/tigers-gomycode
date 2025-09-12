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

let students = ["Etido", "Emmanuel", "Jimmy", "Esosa"]

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

sentenceAnalyzer("I am coming to your house now.")
