const resultValue = document.querySelector("#result");
const numberBtns = Array.from(document.querySelectorAll(".number"));
const pointBtn = document.querySelector("#point");
const operatorBtns = Array.from(document.querySelectorAll(".operator"));
const clearBtn = document.querySelector("#clear");
const plusminusBtn = document.querySelector("#plusminus");
const percentileBtn = document.querySelector("#percentile");

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

function pointBtnOn() {
    pointBtn.addEventListener("click", onNumberBtnClick);
}

function pointBtnOff() {
    pointBtn.removeEventListener("click", onNumberBtnClick);
}

function onOperatorBtnClick(event) {
    operator = event.target.dataset.value;
    console.log(operator);
    return operator;
}

function onClearBtnClick() {
    resultValue.innerHTML = 0;
    operator = null;
    pointBtnOn();
}

function onPlusminusBtnClick() {
    resultValue.innerHTML = resultValue.innerHTML * -1;
}

function onPercentileBtnClick() {
    resultValue.innerHTML = resultValue.innerHTML / 100;
}

function onOperatorBtnClick(event) {
    resultValue.innerHTML = "";
    operator = event.target.dataset.value;
    console.log(operator);
    return operator;
}

numberBtns.forEach(number => number.addEventListener("click", onNumberBtnClick));
operatorBtns.forEach(operator => operator.addEventListener("click", onOperatorBtnClick));
clearBtn.addEventListener("click", onClearBtnClick);
plusminusBtn.addEventListener("click", onPlusminusBtnClick);
percentileBtn.addEventListener("click", onPercentileBtnClick);