const resultValue = document.querySelector("#result");
const numberBtns = Array.from(document.querySelectorAll(".number"));
const operatorBtns = Array.from(document.querySelectorAll(".operator"));
const clearBtn = document.querySelector("#clear");

let operator = null;

function onNumberBtnClick(event) {
    const number = event.target.dataset.value;
    console.log(number);
    resultValue.innerHTML = number;
}

function onOperatorBtnClick(event) {
    operator = event.target.dataset.value;
    console.log(operator);
    return operator;
}

function onClearBtnClick() {
    resultValue.innerHTML = 0;
    operator = null;
}

numberBtns.forEach(number => number.addEventListener("click", onNumberBtnClick));
operatorBtns.forEach(operator => operator.addEventListener("click", onOperatorBtnClick));
clearBtn.addEventListener("click", onClearBtnClick);