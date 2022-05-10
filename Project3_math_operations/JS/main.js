function mathFunction() {
    var addition = 15000 + 40555;
    document.getElementById("Math").innerHTML = addition;
}

function subtractionFunction() {
    var subtraction = 349560 - 349559;
    document.getElementById("sub").innerHTML = subtraction;
}

function subtract() {
    var sub = 15-10;
    document.getElementById("subtractionOperation").innerHTML = "15 - 10 = " + sub;
}

function multiplyFunction() {
    var multiply = 2 * 0;
    document.getElementById("times").innerHTML = "2 * 0 = " + multiply;
}

function divisionFunction() {
    var divide = 5 / 1;
    document.getElementById("dividing").innerHTML = "5 / 1 = " + divide;
}

function multipleMath() {
    var lotta_Math = (3-1) * 10 / 5 + 2;
    document.getElementById("moreMath").innerHTML = "3 minus 1, times 10 then divided by 5, plus 2 = " + lotta_Math;
}

function modulusOperator() {
    var remainder = 30 % 7;
    document.getElementById("modulus").innerHTML = "When you divide 30 by 7, there is a remainder of " + remainder;
}

function negationFunction() {
    var A = 5;
    document.getElementById("negate").innerHTML = -A;
}

function incrementFunction() {
    var X = 1;
    X++;
    document.getElementById("increment").innerHTML = "1 up from 1 is..." + X;
}

function decrementFunction() {
    var Z = 1;
    Z--;
    document.getElementById("decrement").innerHTML = "1 down from 1 is..." + Z;
}

window.alert(Math.random() * 1000);
