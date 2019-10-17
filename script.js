const num1 = document.getElementById("button-1");
const num2 = document.getElementById("button-2");
const num3 = document.getElementById("button-3");
const num4 = document.getElementById("button-4");
const num5 = document.getElementById("button-5");
const num6 = document.getElementById("button-6");
const num7 = document.getElementById("button-7");
const num8 = document.getElementById("button-8");
const num9 = document.getElementById("button-9");
const num0 = document.getElementById("button-0");
const opPlus = document.getElementById("plus");
const opMinus = document.getElementById("minus");
const opMultiply = document.getElementById("multiply");
const opDivide = document.getElementById("divide");
const opEquals = document.getElementById("equals");
const display = document.getElementById("display");
const clearButton = document.getElementById("clear-button");
const backButton = document.getElementById("backspace-button");
const decimalButton = document.getElementById("decimal");

function setEventListeners(){
    //button listeners
    num1.addEventListener("click", function(){
        display.innerHTML += "1";
    });
    num2.addEventListener("click", function(){
        display.innerHTML += "2";
    });
    num3.addEventListener("click", function(){
        display.innerHTML += "3";
    });
    num4.addEventListener("click", function(){
        display.innerHTML += "4";
    });
    num5.addEventListener("click", function(){
        display.innerHTML += "5";
    });
    num6.addEventListener("click", function(){
        display.innerHTML += "6";
    });
    num7.addEventListener("click", function(){
        display.innerHTML += "7";
    });
    num8.addEventListener("click", function(){
        display.innerHTML += "8";
    });
    num9.addEventListener("click", function(){
        display.innerHTML += "9";
    });
    num0.addEventListener("click", function(){
        display.innerHTML += "0";
    });
    opPlus.addEventListener("click", function(){
        display.innerHTML += " + ";
    });
    opMinus.addEventListener("click", function(){
        display.innerHTML += " - ";
    });
    opMultiply.addEventListener("click", function(){
        display.innerHTML += " * ";
    });
    opDivide.addEventListener("click", function(){
        display.innerHTML += " / ";
    });
    clearButton.addEventListener("click", function(){
        display.innerHTML = "";
    });
    opEquals.addEventListener("click", function(){
        let result = evalEquation(display.innerHTML);
        display.innerHTML = "";
        display.innerHTML += result;
    });
    backButton.addEventListener("click", function(){
        display.innerHTML = backspace(display.innerHTML);
    });
    decimalButton.addEventListener("click", function(){
        display.innerHTML += ".";
    });
    //key listeners
    document.addEventListener('keydown', (e) => {
        if (e.code === "Digit1" || e.code === "Numpad1"){
            display.innerHTML += "1";
        }else if (e.code === "Digit2" || e.code === "Numpad2"){
            display.innerHTML += "2";
        }else if (e.code === "Digit3" || e.code === "Numpad3"){
            display.innerHTML += "3";
        }else if (e.code === "Digit4" || e.code === "Numpad4"){
            display.innerHTML += "4";
        }else if (e.code === "Digit5" || e.code === "Numpad5"){
            display.innerHTML += "5";
        }else if (e.code === "Digit6" || e.code === "Numpad6"){
            display.innerHTML += "6";
        }else if (e.code === "Digit7" || e.code === "Numpad7"){
            display.innerHTML += "7";
        }else if (e.code === "Digit8" || e.code === "Numpad8"){
            display.innerHTML += "8";
        }else if (e.code === "Digit9" || e.code === "Numpad9"){
            display.innerHTML += "9";
        }else if (e.code === "Digit0" || e.code === "Numpad0"){
            display.innerHTML += "0";
        }else if (e.code === "NumpadAdd" || (e.code === "Equal" && e.shiftKey)){
            display.innerHTML += " + ";
        }else if (e.code === "NumpadSubtract" || e.code === "Minus"){
            display.innerHTML += " - ";
        }else if (e.code === "NumpadMultiply" || (e.code === "Digit8" && e.shiftKey)){
            display.innerHTML += " * ";
        }else if (e.code === "NumpadDivide" || e.code === "Slash"){
            display.innerHTML += " / ";
        }else if (e.code === "Backspace"){
            display.innerHTML = backspace(display.innerHTML);
        }else if (e.code === "Enter" || e.code === "NumpadEnter"){
            let result = evalEquation(display.innerHTML);
            display.innerHTML = "";
            display.innerHTML += result;
        }else if (e.code === "NumpadDecimal" || e.code === "Period"){
            display.innerHTML += ".";
        }
    });
}

function evalEquation (string){
    let result = eval(string);
    let countDecimals = function (value) {
        if(Math.floor(value) === value) return 0;
        return value.toString().split(".")[1].length || 0; 
    }
    let numDec = countDecimals(result);
    if (result === Infinity || result === -Infinity){
        result = "Try dividing by zero one more time"
    }else if (result % 1 != 0 && numDec > 4 && (result > 0.0001 || result < -0.0001)){
        result = result.toFixed(4);
    }
    return result;
}

function backspace(string){
    return string.slice(0, -1);
}

setEventListeners();
