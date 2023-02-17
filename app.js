const resultValue = document.querySelector("#result");
const numberBtns = Array.from(document.querySelectorAll(".number"));
const pointBtn = document.querySelector("#point");
const operatorBtns = Array.from(document.querySelectorAll(".operator"));
const equalBtn = document.querySelector("#equal");
const clearBtn = document.querySelector("#clear");
const plusminusBtn = document.querySelector("#plusminus");
const percentileBtn = document.querySelector("#percentile");

let a = null;
let b = null;
let operator = null;

function onNumberBtnClick(event) {
    const number = event.target.dataset.value;
    if (number == '.') {
        pointBtnOff();
        resultValue.innerHTML = resultValue.innerHTML + number;
    } else {
        if (resultValue.innerHTML == '0') {
            resultValue.innerHTML = number;
        } else {
            resultValue.innerHTML = resultValue.innerHTML + number;
        }
    }
}

function saveNumber() {
    if (a == null ) {
        a = parseFloat(resultValue.innerHTML);
    } else {
        b = parseFloat(resultValue.innerHTML);
    }
    pointBtnOn();
}

function pointBtnOn() {
    pointBtn.addEventListener("click", onNumberBtnClick);
}

function pointBtnOff() {
    pointBtn.removeEventListener("click", onNumberBtnClick);
}

function calculator(operator, x, y) {
    let result = 0;
    switch(operator) {
        case 'plus':
            result = x + y;
            break;
        case 'minus':
            result = x - y;
            break;
        case 'multiply':
            result = x * y;
            break;
        case 'divide':
            result = x / y;
            break;
    }
    return result;
}

function onOperatorBtnClick(event) {
    saveNumber();
    operator = event.target.dataset.value;
    return operator;
}

function onEqualBtnClick() {
    saveNumber();
    result = calculator(operator, a, b);
    resultValue.innerHTML = result;
    a = result;
    b = null;
}

function onClearBtnClick() {
    resultValue.innerHTML = 0;
    operator = null;
    a = null;
    b = null;
    pointBtnOn();
}

function onPlusminusBtnClick() {
    result = resultValue.innerHTML * -1;
    resultValue.innerHTML = result;
    a = result;
    b = null;
}

function onPercentileBtnClick() {
    result = resultValue.innerHTML / 100;
    resultValue.innerHTML = result;
    a = result;
    b = null;
}

function onOperatorBtnClick(event) {
    saveNumber();
    resultValue.innerHTML = "";
    operator = event.target.dataset.value;
    return operator;
}

numberBtns.forEach(number => number.addEventListener("click", onNumberBtnClick));
operatorBtns.forEach(operator => operator.addEventListener("click", onOperatorBtnClick));
equalBtn.addEventListener("click", onEqualBtnClick);
clearBtn.addEventListener("click", onClearBtnClick);
plusminusBtn.addEventListener("click", onPlusminusBtnClick);
percentileBtn.addEventListener("click", onPercentileBtnClick);