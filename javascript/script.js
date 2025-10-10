// console.log(window)

const heading = document.querySelector("h3");
const btn = document.querySelector("#select-me");
const body = document.getElementsByTagName("body")[0];
const container = document.querySelector(".container");
const firstP = document.getElementById("first");
const allP = document.querySelectorAll("p");
const elem = document.getElementById('intro');
const changeStyleButton = document.getElementById("btn");

const fruitContainer = document.querySelector("ul");
const fruitInput = document.querySelector("#fruit-name");
const addFruitBtn = document.querySelector("#add-fruit");

// console.log(firstP)

function changeText(){
    heading.classList.add("container")
    firstP.setAttribute("class", "box container elem-one")
    console.log(firstP)
}

btn.addEventListener("click", changeText)

changeStyleButton.addEventListener("click", () => {
     elem.style.color = 'blue';
     elem.style.fontSize = '18px';
     elem.style.fontWeight = 'bold';
     console.log('elem:', elem);
})

const addFruit = () => {
    let inputText = fruitInput.value;
    const li = document.createElement("li");
    li.innerText = inputText;
    fruitContainer.appendChild(li);
    fruitInput.value = ""

}

addFruitBtn.addEventListener("click", addFruit)