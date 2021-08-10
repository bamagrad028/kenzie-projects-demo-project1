// We need a way to have a random index item in a array
//Math.random()

// I want an array of domino list items, and I will pick a random one using its index 
//between 0 and lenght

//Nodelist -> Array.from() - Array

let dominoElements = document.querySelectorAll("#dominoes-list li")
console.log(dominoElements)

function getRandomNumber (min, max) {
    // Source: https://stackoverflow.com/a/7228322/1034856
    // License: https://creativecommons.org/licenses/by-sa/4.0/
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let firstIndex = 0
let lastIndex = dominoElements.length - 1
let randomIndex = getRandomNumber(firstIndex,lastIndex)

let randomDomino = dominoElements[randomIndex]
randomDomino.classList.add("selected")
