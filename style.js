let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0
function increment() {
    count = count + 1
    countEl.textContent = count 
}

function save() {
    let counStr = count + " - "
    saveEl.textContent += counStr
    countEl.textContent = 0
    count = 0
}

let firstNumber;
let secondNumber;
let totalEl = document.getElementById("total")



function add() {
    firstNumber = document.getElementById("first-number").value
    secondNumber = document.getElementById("second-number").value
    totalEl.textContent = "Total:" + Number(firstNumber) + Number(secondNumber)
}
function multiply() {
    firstNumber = document.getElementById("first-number").value
    secondNumber = document.getElementById("second-number").value
    totalEl.textContent = "Total:" + Number(firstNumber) * Number(secondNumber)
}
function subtract() {
    firstNumber = document.getElementById("first-number").value
    secondNumber = document.getElementById("second-number").value
    let result = firstNumber - secondNumber
    totalEl.textContent = "Total:" + result
}
function divide() {
    firstNumber = document.getElementById("first-number").value
    secondNumber = document.getElementById("second-number").value
    totalEl.textContent = "Total:" + Number(firstNumber) / Number(secondNumber)
}
