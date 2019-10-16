function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(a, b, op){
    let result = 0;
    if (op === "+"){
        result = add(a, b);
    }else if (op === "-"){
        result = subtract(a, b);
    }else if (op === "*"){
        result = multiply(a, b);
    }else if (op === "/"){
        if (b === 0) return "div by zero";
        result = divide(a, b);
    }
    return result;
}

//assign each button to a variable
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

function setEventListeners(){
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
    }else if (result % 1 != 0 && numDec > 4 && result > 0.0001){
        result = result.toFixed(4);
    }
    return result;
}

function backspace(string){
    return string.slice(0, -1);
}

setEventListeners();
