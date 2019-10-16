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
    if (op === "plus"){
        result = add(a, b);
    }else if (op === "minus"){
        result = subtract(a, b);
    }else if (op === "multiply"){
        result = multiply(a, b);
    }else if (op === "divide"){
        result = divide(a, b);
    }
    return result;
}