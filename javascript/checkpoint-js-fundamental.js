// Function to reverse a string
let myStr = "hello, how are you?";
// first solution
function reverseString(text) {
  let arr = [];
  let secondArr = [];
  let result = "";
  for (let i = 0; i < text.length; i++) {
    arr.push(text[i]);
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    secondArr.push(text[i]);
  }
  for (let i = 0; i < secondArr.length; i++) {
    result = result + secondArr[i];
  }
  //   console.log(result);

  return result;
}

function reverseText(text) {
  return text.split("").reverse().join("");
}

// function to count the number of characters in a string
function countChars(text) {
  return text.length;
}

// function to capitalize words in a sentence
function capitalizeWords(text) {
  let splitArr = text.split(" ");
  let newArr = [];
  for (let i = 0; i < splitArr.length; i++) {
    let newWord = splitArr[i][0].toUpperCase() + splitArr[i].slice(1);
    newArr.push(newWord);
  }
  return newArr.join(" ");
}

function capitalizeWord(text) {
  let result = text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return result;
}

// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function minMax(arr) {
  let max = 0;
  let min = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return [min, max];
}

function findMinMax(arr){
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    return [min, max]
}


// Sum of Array: Create a function that calculates the sum of all elements in an array.
function sumElems(arr){
    let sum = 0;
    for(let val of arr){
        sum = sum + val
    }
    return sum
}

// Filter Array: Implement a function that filters out elements from an array based on a given condition.
function filterArr(arr, condition){
    return arr.filter(condition)
}

const filterCondition = (num) => {
 return num % 2 === 0
}

// Factorial: Write a function to calculate the factorial of a given number.
function factorial(n){
    if(n === 0 || n ===1) return 1
    return n * factorial(n-1);
}

