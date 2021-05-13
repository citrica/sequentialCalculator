// Declaración de variable
var data = {
    valueA: 0,
    valueB: 0,
    operand: '+',
    result: 0,
}

// Funciones de borrado del input y reseteo de variable de inicio
var clearInput = () => document.getElementById("input-value").value = '';

var resetResult = () => {
    data.valueA = 0;
    data.valueB = 0;
    data.operand = '+';
    data.result = 0;
}

var values = () => {
    data.valueA = data.result;
    data.valueB = parseInt(document.getElementById("input-value").value);
}

// Función para comprobar si los operandos contienen valor vacío
var emptyValue = (valueB) => {
    if (isNaN(valueB)) return true;
}

// Función que devuelve mensaje de error
var errorMessage = () => document.getElementById("result").innerText = "Error!! You must enter a value.";

// Funciones de las distintas operaciones con dos operandos de entrada
var sum = (valueA, valueB) => valueA + valueB;
var subtract = (valueA, valueB) => valueA - valueB;
var multiplication = (valueA, valueB) => valueA * valueB;
var division = (valueA, valueB) => valueA / valueB;

function calculate(valueA, valueB, operand) {
    switch (operand) {
        case "+":
            data.result = sum(valueA, valueB);
            break;
        case "-":
            data.result = subtract(valueA, valueB);
            break;
        case "*":
            data.result = multiplication(valueA, valueB);
            break;
        case "/":
            data.result = division(valueA, valueB);
            break;
    }
    document.getElementById("result").innerText = data.result; // Show results
    return data.result;
}

var clickEqual = () => {
    values();
    if (emptyValue(data.valueB)) {
        return errorMessage();
    } else {
        data.result = calculate(data.valueA, data.valueB, data.operand);
        document.getElementById("result").innerText = data.result;
    }
    clearInput();
    resetResult();
}

var clickSum = () => {
    values();
    if (emptyValue(data.valueB)) {
        return errorMessage();
    } else {
        data.result = calculate(data.valueA, data.valueB, data.operand);
        data.operand = '+';
    }
    clearInput();
}
var clickSubtract = () => {
    values();
    if (emptyValue(data.valueB)) {
        return errorMessage();
    } else {
        data.result = calculate(data.valueA, data.valueB, data.operand);
        data.operand = '-';
    }
    clearInput();
}
var clicktMultiplication = () => {
    values();
    if (emptyValue(data.valueB)) {
        return errorMessage();
    } else {
        data.result = calculate(data.valueA, data.valueB, data.operand);
        data.operand = '*';
    }
    clearInput();
}
var clickDivision = () => {
    values();
    if (emptyValue(data.valueB)) {
        return errorMessage();
    } else {
        data.result = calculate(data.valueA, data.valueB, data.operand);
        data.operand = '/';
    }
    clearInput();
}

// Eventos
document.getElementById("button-sum").addEventListener("click", clickSum);
document.getElementById("button-subtract").addEventListener("click", clickSubtract);
document.getElementById("button-multiplication").addEventListener("click", clicktMultiplication);
document.getElementById("button-division").addEventListener("click", clickDivision);
document.getElementById("button-result").addEventListener("click", clickEqual);