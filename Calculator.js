var previousDisplay;
var currentDisplay;
var currentNumbers = null;

var btnNumbers;
var btnOperators;
var btnClearAll;
var btnBack;


document.onreadystatechange = function() {
    if (document.readyState == "complete") {
        queryAllElements();
        attachEvents();
        clearAll();
    }
}

function queryAllElements() {
    previousDisplay = document.querySelector("#calculator-display-previous input");
    currentDisplay = document.querySelector("#calculator-display-current input");
    btnNumbers = document.querySelectorAll("#number-buttons");
    btnOperators = document.querySelectorAll("#operator-buttons");
    btnClearAll = document.querySelector("#btnClearAll");
    btnBack = document.querySelector("#btnBack");
}

function attachEvents() {
    for (var i = 0; i < btnNumbers.length; i++) {
        btnNumbers[i].onclick = clickedNumber;
    }
    for (var i = 0; i < btnOperators.length; i++) {
        btnOperators[i].onclick = clickedOperator;
    }
    btnClearAll.onclick = clearAll;
    btnBack.onclick = clearPreviousNumberClicked;
}

function clickedNumber(buttonClicked) {
    var clickedDigit = parseInt(buttonClicked.target.innerText);
    if(currentNumbers == null) {
        currentNumbers = clickedDigit;
    }
    else {
        currentNumbers = currentNumbers * Math.pow(10,1);
        currentNumbers += clickedDigit;
    }
    displayCurrent(currentNumbers);
}

function clickedOperator (buttonClicked) {
    var operator = buttonClicked.target.innerText;
    switch(operator){
        case "+":
            console.log(operator);
            break;
        case "-":
            console.log(operator);
            break;
        case "*":
            console.log(operator);
            break;
        case "/":
            console.log(operator);
            break;
    }
}

function displayCurrent(currentNumbers) {
    currentDisplay.value = currentNumbers;
}

function clearAll() {
    currentNumbers = 0;
    previousDisplay.value = 0;
    displayCurrent(currentNumbers);
}

function clearPreviousNumberClicked() {
    currentNumbers = Math.floor(currentNumbers/10);
    displayCurrent(currentNumbers);
}