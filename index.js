function removeBackground() {
    // this function removes any highlighted buttons and this happens when we change either input boxes and when we press a different button
    const buttonElements = document.getElementsByClassName("operands")
    for (let i=0; i<buttonElements.length; i++) {
        let currentElement = buttonElements[i]
        currentElement.removeAttribute("style")
    }
}

function checkInputs() {
    // this function checks that both inputs are numerical and returns true if at least one input is not numerical
    const opOneElement = document.getElementById("firstnumber")
    const opTwoElement = document.getElementById("secondnumber")
    const outputElement = document.getElementById("output")
    if (isNaN(opOneElement.value) || isNaN(opTwoElement.value)) {
        removeBackground()
        outputElement.innerHTML="At least one of the elements is not a number. Please make sure both inputs are numbers!"
        return true
    }
    return false
}

function addition() {
    // this function computes the sum of the two inputs but first checks that both inputs are numerical and highlights the addition button after removing previous highlighted button
    if (checkInputs()) {
        return
    }
    removeBackground()
    const additionOpElement = document.getElementById("additionOp")
    additionOpElement.setAttribute("style", "background-color:yellow");
    const opOneElement = document.getElementById("firstnumber")
    const opTwoElement = document.getElementById("secondnumber")
    const outputElement = document.getElementById("output")
    const opOne = Number(opOneElement.value)
    const opTwo = Number(opTwoElement.value)
    // this turns the output text red if result is negative
    if (opOne + opTwo < 0) {
        outputElement.setAttribute("style", "color:red");
    } else {
        outputElement.removeAttribute("style");
    }
    outputElement.innerHTML = opOne + opTwo
}
function subtractIt() {
    // this function computes the difference of the two inputs but first checks that both inputs are numerical and highlights the subtraction button after removing previous highlighted button
    if (checkInputs()) {
        return
    }
    removeBackground()
    const subtractionOpElement = document.getElementById("subtractionOp")
    subtractionOpElement.setAttribute("style", "background-color:yellow");
    const opOneElement = document.getElementById("firstnumber")
    const opTwoElement = document.getElementById("secondnumber")
    const outputElement = document.getElementById("output")
    const opOne = Number(opOneElement.value)
    const opTwo = Number(opTwoElement.value)
    // this turns the output text red if result is negative
    if (opOne - opTwo < 0) {
        outputElement.setAttribute("style", "color:red");
    } else {
        outputElement.removeAttribute("style");
    }
    outputElement.innerHTML = opOne - opTwo
}
function multiplyIt() {
    // this function computes the product of the two inputs but first checks that both inputs are numerical and highlights the multiplication button after removing previous highlighted button
    if (checkInputs()) {
        return
    }
    removeBackground()
    const multiplyOpElement = document.getElementById("multiplicationOp")
    multiplyOpElement.setAttribute("style", "background-color:yellow");
    const opOneElement = document.getElementById("firstnumber")
    const opTwoElement = document.getElementById("secondnumber")
    const outputElement = document.getElementById("output")
    const opOne = Number(opOneElement.value)
    const opTwo = Number(opTwoElement.value)
    // this turns the output text red if result is negative
    if (opOne * opTwo < 0) {
        outputElement.setAttribute("style", "color:red");
    } else {
        outputElement.removeAttribute("style");
    }
    outputElement.innerHTML = opOne * opTwo
}
function divideIt() {
    // this function computes the division of the two inputs but first checks that both inputs are numerical and highlights the division button after removing previous highlighted button
    if (checkInputs()) {
        return
    }
    removeBackground()
    const divisionOpElement = document.getElementById("divisionOp")
    divisionOpElement.setAttribute("style", "background-color:yellow");
    const opOneElement = document.getElementById("firstnumber")
    const opTwoElement = document.getElementById("secondnumber")
    const outputElement = document.getElementById("output")
    const opOne = Number(opOneElement.value)
    const opTwo = Number(opTwoElement.value)
    if (opOne / opTwo < 0) {
        outputElement.setAttribute("style", "color:red");
    } else {
        outputElement.removeAttribute("style");
    }
    outputElement.innerHTML = opOne / opTwo
}
function exponentiateIt() {
    // this function computes the exponentiation of the two inputs using a for loop but first checks that both inputs are numerical and highlights the multiplication button after removing previous highlighted button
    if (checkInputs()) {
        return
    }
    removeBackground()
    const exponentiateOpElement = document.getElementById("exponentiateOp")
    exponentiateOpElement.setAttribute("style", "background-color:yellow");
    const opOneElement = document.getElementById("firstnumber")
    const opTwoElement = document.getElementById("secondnumber")
    const outputElement = document.getElementById("output")
    const opOne = Number(opOneElement.value)
    var opTwo = Number(opTwoElement.value)
    // since we are using a for loop we can't account for raising the first input to a non-integer second input
    if (opTwo%1!=0) {
        outputElement.innerHTML="Your second number is not an integer and unfortunately this calculator only takes in integers for the second number."
        return
    }
    // we keep track of whether the power is negative in which case we take the reciprocal of raising the first input to the power of the absolute value of the second input
    var negativePow = false
    if (opTwo < 0) {
        negativePow = true
        opTwo = -1 * opTwo
    }
    let result = 1
    for (let i=0; i<opTwo; i++) {
        result *= opOne
    }
    if (negativePow) {
        result = 1/result
    }
    // this turns the output text red if result is negative
    if (result < 0) {
        outputElement.setAttribute("style", "color:red");
    } else {
        outputElement.removeAttribute("style");
    }
    outputElement.innerHTML = result
}
function clearAll() {
    // this function clears both input fields for the two numbers as well as the output field and also removes any previous highlighted button
    removeBackground()
    const clearOpElement = document.getElementById("clearOp")
    clearOpElement.setAttribute("style", "background-color:yellow");
    const opOneElement = document.getElementById("firstnumber")
    const opTwoElement = document.getElementById("secondnumber")
    const outputElement = document.getElementById("output")
    const opOne = Number(opOneElement.value)
    const opTwo = Number(opTwoElement.value)
    outputElement.innerHTML = ""
    opOneElement.value = ""
    opTwoElement.value = ""
}